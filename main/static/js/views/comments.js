//initializes app
var app = app || {};

app.CommentsView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function(options) {
    _.bindAll();

    //el is set based on id passed when view is created
    this.givenTo = this.options.givenTo;
    this.addAll();
  },

  render: function() {

  },

  addOne: function( comment ) {
    var tempHTML = new app.CommentView( {model: comment} );
    this.$el.append(tempHTML.render().el);
  },

  //add comments belonging to the candidate
  addAll: function() {

    var tempArray = this.collection.filter( function( comment ) {  
      return comment.get('givenTo') === this.givenTo
    }, this);
    tempArray.forEach( function( comment ) {
        this.addOne( comment );
    }, this );

  }

}); 

app.CommentView = Backbone.View.extend({

  tagName: 'li',
  template: _.template( $('#comment-template').html() ),
  
  initialize: function() {
  }, 

  render: function() {
    console.log(this.model.toJSON())
    this.$el.html( this.template( {model: this.model.toJSON() } ) );
    console.log(this.el)
    return this;
  }
});

