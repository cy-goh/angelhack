//initializes app
var app = app || {};

app.Developers = Backbone.Collection.extend({
  model: app.Developer,
  url: 'http://127.0.0.1:8000/api/v1/contest/2/?format=json',
  parse: function(response) {
    var target = response['contestant'], results = [];

    for(var i = 0, len = target.length; i < len; i++) {
      var attr = {};

      attr['name'] = target[i]['first_name'] + " " + target[i]['last_name'];
      attr['id'] = target[i]['id'];
//      attr['scoreGivenByCompany'] = target[i][]
//      attr['src'] = 

      results.push(attr);
    }

    return results;
  } 
    
});