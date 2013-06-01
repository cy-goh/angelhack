//initializes app
var app = app || {};

//main view of the application
app.MainView = Backbone.View.extend({
  el: '#wrapper',
  initialize: function() {
    console.log('initializing main view');
  }
});