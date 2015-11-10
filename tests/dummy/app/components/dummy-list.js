import Ember from 'ember';
import mutationObserver from '../mixins/mutation-observer';

export default Ember.Component.extend(mutationObserver, {
  classNames: ['dummy-list'],

  onMutation(mutations) {
    console.log('onMutation');

    mutations.forEach(function(mutation) {
      console.log(mutation.type);
    });    
  }
});