import Ember from 'ember';
import mutationObserver from '../mixins/mutation-observer';

export default Ember.Component.extend(mutationObserver, {
  classNames: ['dummy-list'],

  onMutation(mutations) {
    mutations = mutations.map(function(mutation) {

      [].forEach.call(mutation.addedNodes, function(record) {
        console.log(record);
      });

      return {
        type: mutation.type,
        oldValue: mutation.oldValue,
        recordsLength: mutation.addedNodes.length
      }
    });    

    var mutationsString = JSON.stringify(mutations);

    $('#mutations').append(`<div class="mutation">${mutationsString}</div>`);
  }
});