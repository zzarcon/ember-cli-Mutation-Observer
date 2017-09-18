import Ember from 'ember';
import sinon from 'sinon';
import { initialize } from 'dummy/initializers/mutation-observer';
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

// Replace this with your real tests.
test('it works', function(assert) {
  const spy = sinon.spy(Ember.Component, 'reopen');

  initialize(this.application);

  // Without specific config, the mixin will not be injected in all Components
  assert.notOk(spy.called);

  Ember.Component.reopen.restore();
});
