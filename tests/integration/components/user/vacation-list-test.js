import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('user/vacation-list', 'Integration | Component | user/vacation list', {
  integration: true
});

const userWithoutVacations = (testContext) => {
  const store = testContext.container.lookup('service:store');
  let testUser = Ember.run(() => {
    return store.createRecord('user', {
      firstName: "Bruce",
      lastName: "Wayne"
    });
  });
  return testUser;
};

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const store = this.container.lookup('service:store');
  let testUser = Ember.run(() => {
    return store.createRecord('user', {
      firstName: "Bruce",
      lastName: "Wayne"
    });
  });

  this.on('stubCreate', function() { return null; });
  this.set('userToTest', testUser);

  this.render(hbs`{{user/vacation-list user=userToTest create=(action 'stubCreate')}}`);

  let text = this.$().text();
  assert.ok(text.match(/Vacation Time for Bruce Wayne/));

  let initialLength = this.$("[data-test-id='vacation-length']").text();
  assert.equal(initialLength, "7");

});

test('it updates the new vacation length', function(assert) {
  this.on('stubCreate', function() { return null; });
  this.set('userToTest', userWithoutVacations(this));

  this.render(hbs`{{user/vacation-list user=userToTest create=(action 'stubCreate')}}`);

  this.$("[data-test-id='date-pickers'] input:first").val('2015-02-01').change();
  this.$("[data-test-id='date-pickers'] input:last").val('2015-02-03').change();

  assert.equal(this.$("[data-test-id='vacation-length']").text(), "2");

});
