import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user/vacation-list', 'Integration | Component | user/vacation list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.on('stubCreate', function() { return null; });
  this.render(hbs`{{user/vacation-list create=(action 'stubCreate')}}`);

  assert.ok(this.$().text().match(/Vacation Time/));

});
