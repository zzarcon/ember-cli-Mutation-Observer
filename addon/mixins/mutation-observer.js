/**
 * TODO: 
 *   -Add description
 *   -Check for MutationObserver
 */

import Ember from 'ember';

export default Ember.Mixin.create({
  mutationInstance: null,
  onMutation: null,
  defaultMutationConfig: {
    attributes: true,
    childList: true,
    characterData: true
  },
  mutationConfig: null, //User config

  setupObserver: Ember.on('didInsertElement', function() {
    var cb = this.get('onMutation');
    if (Ember.typeOf(cb) !== 'function') return;

    var target = this.$()[0];     
    var observer = new MutationObserver((mutations) => {
      //TODO: return objects in an better way
      cb(mutations);
    });
    var config = Ember.merge(this.get('defaultMutationConfig'), this.get('mutationConfig'));

    observer.observe(target, config);
     
    this.set('mutationInstance', observer);
  }),

  destroyObserver: Ember.on('willDestroyElement', function() {
    var observer = this.get('mutationInstance');
    if (!observer) return;

    observer.disconnect();
  })
});