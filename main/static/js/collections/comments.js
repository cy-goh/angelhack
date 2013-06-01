//initializes app
var app = app || {};

app.Comments = Backbone.Collection.extend({
  model: app.Comment,
});