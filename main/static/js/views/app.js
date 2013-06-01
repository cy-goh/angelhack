//initializes app
var app = app || {};

//main view of the application (/index)
app.MainView = Backbone.View.extend({
  el: '#wrapper',
  initialize: function() {
    console.log('initializing main view');
    app.company = new app.Company();
    new app.CompanyView({model: app.company});
  }
});

