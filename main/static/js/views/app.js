//initializes app
var app = app || {};

//main view of the application
app.MainView = Backbone.View.extend({
  el: '#wrapper',
  initialize: function() {
    console.log('initializing main view');
    app.company = new app.Company(companyData);
    new app.CompanyView({model: app.company});

    app.companyRepresentativesList = app.company.get('companyRepresentatives');
    app.developersList = app.company.get('developers');
  }
});