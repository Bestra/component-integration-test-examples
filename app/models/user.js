import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  userName:      DS.attr('string'),
  firstName:     DS.attr('string'),
  lastName:      DS.attr('string'),

  vacations:     DS.hasMany('vacation'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + " " + this.get('lastName');
  })
});
