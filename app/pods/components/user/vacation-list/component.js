import Ember from 'ember';
import moment from 'moment';

const format = function(key) {
  return Ember.computed(key, function() {
    return this.get(key).format('YYYY-MM-DD');
  });
};

export default Ember.Component.extend({
  user: null,

  startVal: format('startDate'),
  endVal: format('endDate'),
  startDate: null,
  endDate: null,

  newLength: Ember.computed('startDate', 'endDate', function() {
    return this.get('endDate').diff(this.get('startDate'), 'days');
  }),

  init() {
    this._super(...arguments);

    let start = moment();
    let end = start.clone().add(7, 'days');

    this.setProperties({startDate: start, endDate: end});

  },
  actions: {
    changeDate(key, {target: { value }}) {
      let newDate = moment(value);

      if (newDate.isValid()) {
        this.set(key, newDate);
      }
    }
  }
});
