import Ember from 'ember';
import mutationObserver from '../mixins/mutation-observer';

export default Ember.Component.extend(mutationObserver, {
  classNames: ['dummy-list'],

  onMutation(mutations) {
    
    mutations.forEach(function(mutation) {
      console.log(mutation.type, mutation.oldValue);

      mutation.addedNodes.forEach(function(record) {
        console.log(record);
      });
    });    
  }
});