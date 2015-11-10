/**
 * TODO: 
 *   -Add description
 *   -Check for MutationObserver
 */

import Ember from 'ember';

const defaultMutationConfig = {
  attributes: true,
  childList: true,
  characterData: true
};
const hasMutationSupport = !!window.MutationObserver;

export default Ember.Mixin.create({
  mutationInstance: null,
  onMutation: null,
  mutationConfig: null, 
  
  setupObserver: Ember.on('didInsertElement', function() {
    var cb = this.get('onMutation');
    if (!hasMutationSupport || Ember.typeOf(cb) !== 'function') return;

    var target = this.$()[0];     
    var observer = new MutationObserver((mutations) => {
      cb(mutations); //TODO: return objects in an better way
    });
    var config = Ember.merge(defaultMutationConfig, this.get('mutationConfig'));

    observer.observe(target, config);
     
    this.set('mutationInstance', observer);
  }),

  destroyObserver: Ember.on('willDestroyElement', function() {
    var observer = this.get('mutationInstance');
    if (!observer) return;

    observer.disconnect();
  })
});