import Ember from 'ember';

export default Ember.Route.extend({
  userRepo: Ember.inject.service('repo/user'),

  model() {
    return this.get('userRepo').all();
  }
});
