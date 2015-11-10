import Ember from 'ember';
import mutationObserver from '../mixins/mutation-observer';

export function initialize(/* container, application */) {
  //TODO: Check if the flag is true
  
  Ember.Component.reopen(mutationObserver);
}

export default {
  name: 'mutation-observer',
  initialize: initialize
};