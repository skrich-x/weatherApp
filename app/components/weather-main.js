import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['weather-main'],

  init: function() {
    this.tempSlice();
		this._super();
	},

  tempSlice: function() {
    var temp = this.get('current.temperature');
        temp = temp.toString().slice(0,2);
        this.set('current.temperature', temp);
     }
});
