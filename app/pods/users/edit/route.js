import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('users').findBy('userName', params.user_name);
  },

  serialize(model) {
    return {user_name: model.get('userName')};
  }
});
