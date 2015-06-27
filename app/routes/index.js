import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return new Ember.$.Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(resolve, reject);
		}).then(function(position) {
			return position.coords;
		});
	},


});
