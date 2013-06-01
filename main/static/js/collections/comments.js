//initializes app
var app = app || {};

app.Comments = Backbone.Collection.extend({
  model: app.Comment,
  url: 'http://127.0.0.1:8000/api/v1/contest/2/?format=json',
  parse: function(response) {
    //console.log(response)
    var target = response['contest_updates'], results = [];
    for(var i = 0, len = target.length; i< len; i++) {
      var attr = {};
      attr['givenBy'] = target[i]['tester']['id'];
      attr['givenByName'] = target[i]['tester']['first_name'] + ' ' + target[i]['tester']['last_name'];
      attr['givenTo'] = target[i]['contestant']['id'];
      attr['points'] = target[i]['points_awarded'];
      attr['category'] = target[i]['category'];
      attr['text'] = target[i]['comment'];

      results.push(attr);
    }
    //console.log(results)
    return results;
  }
});