import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dummy-list-item'],

  onMutation(mutations) {
    console.log('onMutation');

    mutations.forEach(function(mutation) {
      console.log(mutation.type);
    });    
  }
});