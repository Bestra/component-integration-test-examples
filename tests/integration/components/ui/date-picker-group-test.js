import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/date-picker-group', 'Integration | Component | ui/date picker group', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ui/date-picker-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ui/date-picker-group}}
      template block text
    {{/ui/date-picker-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
