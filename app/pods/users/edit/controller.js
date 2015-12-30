import Ember from 'ember';

export default Ember.Controller.extend({
  userRepo: Ember.inject.service('repo/user'),

  actions: {
    createVacation(user, startDate, endDate) {
      this.get('userRepo').createVacation(user, startDate, endDate)
    }
  }
})
