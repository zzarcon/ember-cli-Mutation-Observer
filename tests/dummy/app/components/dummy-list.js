import Ember from 'ember';
import dummyMixin from '../mixins/dummy';
import mutationObserver from '../mixins/mutation-observer';

export default Ember.Component.extend(mutationObserver, {
  classNames: ['dummy-list']
});
