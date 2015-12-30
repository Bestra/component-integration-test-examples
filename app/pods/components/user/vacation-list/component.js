import Ember from 'ember';
import moment from 'moment';

const format = function(key) {
  return Ember.computed(key, function() {
    return this.get(key).format('l');
  });
};

export default Ember.Component.extend({
  user: null,

  startVal: format('startDate'),
  endVal: format('endDate'),
  startDate: null,
  endDate: null,

  init() {
    this._super(...arguments);

    let start = moment();
    let end = start.clone().add(7, 'days');

    this.setProperties({startDate: start, endDate: end});

  },
  actions: {
    changeDate() {
      console.log(arguments);
    }
  }
});
