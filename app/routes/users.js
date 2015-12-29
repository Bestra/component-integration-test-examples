import Ember from 'ember';
import User from 'component-integration-test-app/models/user';

export default Ember.Route.extend({

  model() {
    return [
      User.create({ userName: "batman", firstName: "Bruce", lastName: "Wayne" }),
      User.create({ userName: "robin", firstName: "William", lastName: "Grayson" })
    ];
  }
});
