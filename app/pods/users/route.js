import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      this.store.createRecord('user', { userName: "batman", firstName: "Bruce", lastName: "Wayne" }),
      this.store.createRecord('user', { userName: "robin", firstName: "William", lastName: "Grayson" })
    ];
  }
});
