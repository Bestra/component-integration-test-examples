import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  user: DS.belongsTo('user'),

  length: Ember.computed('startDate', 'endDate', function() {
  })


});
