import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return new Ember.RSVP.Promise(function(resolve){
      navigator.geolocation.getCurrentPosition(function(position){
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log(position.coords.latitude, position.coords.longitude);
        });
      });
    },

});
