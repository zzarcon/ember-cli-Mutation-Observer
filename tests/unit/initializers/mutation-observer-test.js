import Ember from 'ember';
import sinon from 'sinon';
import { initialize } from 'dummy/initializers/mutation-observer';
import mutationObserver from 'dummy/mixins/mutation-observer';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | mutation-observer', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

test('it should not alter Ember.Component by default', function(assert) {
  const spy = sinon.spy(Ember.Component, 'reopen');

  initialize(this.application);

  // Without specific config, the mixin will not be injected in all Components
  assert.notOk(spy.called, 'Component was not altered');

  Ember.Component.reopen.restore();
});

test('it reopens Ember.Component with `mutationObserverInjection` config flag', function(assert) {
  this.application.register('config:environment', Ember.Object.create({
    mutationObserverInjection: true
  }));

  const spy = sinon.spy(Ember.Component, 'reopen');

  initialize(this.application);

  // Without specific config, the mixin will not be injected in all Components
  assert.ok(spy.calledOnce, 'Component was reopened due to config flag');
  assert.ok(spy.calledWith(mutationObserver), 'Component received mutation mixin');

  Ember.Component.reopen.restore();
});
