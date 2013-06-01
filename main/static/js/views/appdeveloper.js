//main view of the application (/developer)
app.MainDeveloperView = Backbone.View.extend({
  el: '#wrapper',
  initialize: function() {
    console.log('initializing main developer view');
    app.company = new app.Company(companyData);
    app.companyRepresentativesList = app.company.get('companyRepresentatives');
  }
});

