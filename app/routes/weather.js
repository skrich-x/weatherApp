import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.ajax('https://api.forecast.io/forecast/666875ca570eda1380e5423c3b7a5006/'+params.lat+','+params.lng, {dataType: 'jsonp'})
      .then(function(response){;
      return (response);

    });
  },
});

// +params.lat+','+params.lng,
