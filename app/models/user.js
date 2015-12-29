import Ember from 'ember';

export default Ember.Object.extend({
  userName:      "",
  firstName:     "",
  lastName:      "",

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + " " + this.get('lastName');
  }),
  vacationStart: "",
  vacationEnd:   ""
});
