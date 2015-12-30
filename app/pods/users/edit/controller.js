import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createVacation(user, startDate, endDate) {
      return this.store.createRecord('vacation', {user, startDate, endDate});
    }
  }
})
