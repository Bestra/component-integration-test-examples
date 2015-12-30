import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  user: DS.belongsTo('user'),

  length: Ember.computed('startDate', 'endDate', function() {
    return this.get('endDate').diff(this.get('startDate'), 'days');
  })


});
