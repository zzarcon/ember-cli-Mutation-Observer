/**
 * Simple initializer that implements the mutationObserverMixin 
 * in all the Components. It uses a flag defined in the app 
 * environment for it.
 */

import Ember from 'ember';
import mutationObserver from '../mixins/mutation-observer';

export function initialize(app) {
  const config = app.lookupFactory ? 
    app.lookupFactory('config:environment') :
    app.__container__.lookupFactory('config:environment');
  
  if (!config || !config.mutationObserverInjection) {return;}

  Ember.Component.reopen(mutationObserver);
}

export default {
  name: 'mutation-observer',
  initialize: initialize
};