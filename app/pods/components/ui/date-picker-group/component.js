import Ember from 'ember';
import moment from 'moment';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: '',
  startDateObj: null,
  endDateObj: null,

  init() {
    this._super(...arguments);

    let start = moment();
    let end = start.clone().add(7, 'days');

    this.setProperties({startDateObj: start, endDateObj: end});

  },

  startDate: computed('startDateObj', function() {
    return this.get('startDateObj').format('l');
  }),

  endDate: computed('endDateObj', function() {
    return this.get('endDateObj').format('l');
  }),

  actions: {
    dateChanged(propName, {target: {value}}) {
      console.log(value);
    }
  }

});
