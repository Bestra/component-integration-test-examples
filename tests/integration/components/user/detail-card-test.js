import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import User from 'component-integration-test-app/models/user';

moduleForComponent('user/detail-card', 'Integration | Component | user/detail card', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  //

  this.on('wasClicked', function() {
    assert.ok(true);
  });

  this.set('user', User.create({firstName: "John", lastName: "Wayne"}));
  // Template block usage:
  // this.render(hbs`
  //   {{user/detail-card user=user onClick=wasClicked}}
  // `);

  this.render("{{user/detail-card user=user onClick=wasClicked}}");

  this.$('.user-card').click();

  assert.equal(this.$('.card-header').text().trim(), 'Details for John Wayne');
});
