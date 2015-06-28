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

   todayConditionClass: function() {
 	  var conditions = {
 	    'clear-day': 'wi-day-sunny',
 	    'clear-night': 'wi-',
 	    'rain': 'wi-rain',
 	    'snow': 'wi-snow',
 	    'sleet': 'wi-rain-mix',
 	    'wind': 'wi-cloudy-gusts',
 	    'fog': 'wi-fog',
 	    'cloudy': 'wi-cloudy',
 	    'partly-cloud-day': 'wi-cloudy',
 	    'partly-cloudy-night': 'night-partly-cloudy',

 	  };
 	  return conditions[this.get('results.currently.icon')] || 'wi-day-sunny';
     }.property('results.currently.icon'),



});
