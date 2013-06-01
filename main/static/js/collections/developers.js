//initializes app
var app = app || {};

app.Developers = Backbone.Collection.extend({
  model: app.Developer,
});