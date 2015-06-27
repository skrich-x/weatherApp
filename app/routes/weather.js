import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.$.ajax('https://api.forecast.io/forecast/666875ca570eda1380e5423c3b7a5006/16.4944, 151.7364', {dataType: 'jsonp'})
      .then(function(response){;
      return response;

    });
  }
});
