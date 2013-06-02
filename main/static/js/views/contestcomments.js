app.ContestCommentView = Backbone.View.extend({

  tagName: 'div',
  className: 'media',
  template: _.template( $('#commentBoxTemplate').html() ),
  
  initialize: function(options) {
    this.direction = this.options.direction;
  }, 

  events: {
    'click': 'redirect'
  },

  render: function() {

    this.$el.html( this.template( {model: this.model.toJSON() } ) );
      this.$('#text').jTruncate({
        length: 100,
        minTrail: 0,
        moreText: 'Read More',
        lessText: 'Read Less',
        ellipsisText: '...'
      })
    this.$('.media-object').addClass(this.direction);
    if(this.direction === 'pull-right') {
      this.$('.media-body').addClass('right')
      this.$('.media-body blockquote').addClass('pull-right')
    }
    return this;
  }

});

app.ContestCommentsView = Backbone.View.extend({

  el: '#commentBox',

  initialize: function(options) {
    _.bindAll();
    var that = this;

    //el is set based on id passed when view is created
    this.givenTo = this.options.givenTo;

    this.collection.bind('reset', function() {
      console.log('hello')
    }, this)

    this.collection.fetch({success: function() {
      that.addAll(); 
      console.log(that.el) 
    }});
    
  },

  addOne: function( comment, leftDirection ) {

    var tempHTML;
    if(leftDirection) {
      tempHTML = new app.ContestCommentView( {model: comment, direction: 'pull-left'} );      
    }

    else {
      tempHTML = new app.ContestCommentView( {model: comment, direction: 'pull-right'} );      
    }
    this.$el.append(tempHTML.render().el);
    //console.log(tempHTML)
  },

  //add comments belonging to the candidate
  addAll: function() {
    var leftDirection = true;

    var tempArray = this.collection.filter( function( comment ) {  
      return comment.get('givenTo') === this.givenTo
    }, this);

    tempArray.forEach( function( comment ) {
        this.addOne( comment, leftDirection );
        leftDirection = !leftDirection;
    }, this );

  }

}); 