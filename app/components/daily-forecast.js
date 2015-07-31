import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['weather-forecast'],

dailyConditionClass: function() {
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
 return conditions[this.get('results.daily.data.1.icon')] || 'wi-day-sunny';
 }.property('results.daily.data.1.icon')


});
