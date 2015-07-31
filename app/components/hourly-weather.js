import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'section',
  className: ['hourly-weather'],

  init: function() {

    this.getNextTwelveHours();
    this.formatTime();
    this._super();

	},

  getNextTwelveHours: function() {
      var nextTwelveHours= this.get('hourly.data').slice(0, 12);
      this.set('hourly', nextTwelveHours);
      console.log(nextTwelveHours);
  },

  formatTime: function(nextTwelveHours) {
      var time = this.get('results.hourly.data.1.time');
      time = moment().format('llll');
      this.set('hourly.time', time);
      console.log(time);
  },

});


//tagName: 'li',
//clssNames:[hourly-weather]

//time: function(){
  //return(new Date(this.get('hourly.time'))).getUTCHours();
//}property('hourly.time')
//}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.format('h a')
