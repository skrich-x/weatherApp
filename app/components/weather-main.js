import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['weather-main'],

  init: function() {
    this.formatTime();
    this.tempSlice();
		this._super();
	},

  tempSlice: function() {
    var temp = this.get('current.temperature');
        temp = temp.toString().slice(0,2);
        this.set('current.temperature', temp);
     },


  formatTime: function(){
     var time = this.get('current.time');
     time = moment().format('llll');
     this.set('current.time', time);
   },

  todaysCoditionIcon: function(){
    var conditions = {
      'clear-night': 'wi-'
    };

    return conditions[this.get('results.currently.icon')] || 'wi-day-sunny';
  }.property('results.currently.icon')


});
