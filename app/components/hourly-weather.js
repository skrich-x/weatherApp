import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'section',
  className: ['hourly-weather'],

  init: function() {
    this.formatTime();
    this.getNextTwelveHours();
		this._super();
	},

  getNextTwelveHours: function() {
      var nextTwelveHours= this.get('hourly').slice(0, 12);
      this.set('hourly', nextTwelveHours);
      console.log(nextTwelveHours);
     },

  formatTime: function(time){
      var time = this.get('hourly.time');
      time = moment().format('llll');
      this.set('hourly.time', time);
  },
});
