//initializes app
var app = app || {};

app.Comments = Backbone.Collection.extend({
  model: app.Comment,
  url: 'http://127.0.0.1:8000/api/v1/contest/?format=json',
  parse: function(response) {
    console.log(response)
  }
});