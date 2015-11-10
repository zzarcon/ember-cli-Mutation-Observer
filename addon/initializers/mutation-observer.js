/**
 * Simple initializer that implements the mutationObserverMixin 
 * in all the Components. It uses a flag defined in the app 
 * environment for it.
 */

import Ember from 'ember';
import mutationObserver from '../mixins/mutation-observer';

export function initialize(container, application) {
  let config = container.lookupFactory('config:environment')
  
  if (!config.mutationObserverInjection) return;
  
  Ember.Component.reopen(mutationObserver);
}

export default {
  name: 'mutation-observer',
  initialize: initialize
};