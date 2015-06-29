import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		console.log(params);
		return Ember.$.ajax('https://maps.googleapis.com/maps/api/geocode/json?address='+params.locale+'&components=locality&components=postal_code&key=AIzaSyBjwLoZ2T4_wmsxFwyNA3XWUfNdFjUi1PY').then(function(response) {
			console.log(response);
		})
	}
});
