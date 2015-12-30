import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),

  actions: {
    createVacation(user, startDate, endDate) {
      return this.store.createRecord('vacation', {user, startDate, endDate});
    }
  }
});
