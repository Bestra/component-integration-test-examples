import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),


  all() {
    const store = this.get('store');

    return [
      store.createRecord('user', { userName: "batman", firstName: "Bruce", lastName: "Wayne" }),
      store.createRecord('user', { userName: "robin", firstName: "William", lastName: "Grayson" })
    ];
  },

  createVacation(user, startDate, endDate) {
    const store = this.get('store');
    return store.createRecord('vacation', {user, startDate, endDate});
  }
});
