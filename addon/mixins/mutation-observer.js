/**
 * TODO: 
 *   -Add description
 */

import Ember from 'ember';

const Observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
const hasMutationSupport = !!Observer;
const defaultMutationConfig = {
  attributes: true,
  childList: true,
  characterData: true
};

export default Ember.Mixin.create({
  mutationInstance: null,
  onMutation: null,
  mutationConfig: null, 
  
  setupObserver: Ember.on('didInsertElement', function() {
    var cb = this.get('onMutation');
    
    if (!hasMutationSupport) {
      return console.warn("MutationObserverMixin: MutationObserver is not supported in this browser");
    } 

    if (Ember.typeOf(cb) !== 'function') {
      return console.warn("MutationObserverMixin: 'onMutation' callback it's undefined");
    }

    var target = this.$()[0];     
    var observer = new Observer(cb);
    var config = Ember.merge(defaultMutationConfig, this.get('mutationConfig'));

    observer.observe(target, config);
     
    this.set('mutationInstance', observer);
  }),

  destroyObserver: Ember.on('willDestroyElement', function() {
    var observer = this.get('mutationInstance');
    if (!observer) {return;}

    observer.disconnect();
  })
});