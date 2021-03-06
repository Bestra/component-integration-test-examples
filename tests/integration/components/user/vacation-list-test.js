import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('user/vacation-list', 'Integration | Component | user/vacation list', {
  integration: true
});


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

let userWithoutVacations = (container) => {
  const store = container.lookup('service:store');
  let testUser = Ember.run(() => {
    return store.createRecord('user', {
      firstName: "Bruce",
      lastName: "Wayne"
    });
  });
  return testUser;
};

let setDates = function(start, end) {
  this.$("[data-test-id='date-pickers'] input:first").val(start).change();
  this.$("[data-test-id='date-pickers'] input:last").val(end).change();
};

test('it updates the new vacation length', function(assert) {
  this.on('stubCreate', function() { return null; });
  this.set('userToTest', userWithoutVacations(this.container));

  this.render(hbs`{{user/vacation-list user=userToTest create=(action 'stubCreate')}}`);

  setDates.call(this, '2015-02-01', '2015-02-04');

  assert.equal(this.$("[data-test-id='vacation-length']").text(), "3");

});


test('the Create button invokes the "create" action with start and end date', function(assert) {
  assert.expect(2);
  this.on('stubCreate', function(start, end) {
    let fmt = 'YYYY-MM-DD';
    assert.equal(start.format(fmt), '2015-02-01');
    assert.equal(end.format(fmt), '2015-02-03');
  });

  this.set('userToTest', userWithoutVacations(this.container));

  this.render(hbs`{{user/vacation-list user=userToTest create=(action 'stubCreate')}}`);

  setDates.call(this, '2015-02-01', '2015-02-03');
  this.$('button').click();

});
