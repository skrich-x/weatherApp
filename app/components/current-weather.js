import Ember from 'ember';

export default Ember.Component.extend({
  model: function(){
    return Ember.$.ajax('https://api.forecast.io/forecast/666875ca570eda1380e5423c3b7a5006/34.8444° N,82.3856° W', {dataType:'jsonp'}).then(function(response){
      console.log(response);
  });
}
});


// 34.8444° N, 82.3856° W Greenville

// App = Ember.Application.create();
//
// App.Router.map(function() {
//   // put your routes here
// });
//
// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return Ember.$.ajax("https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=tacos&includes=Images,Shop", {dataType: 'jsonp'});
//   }
// });
