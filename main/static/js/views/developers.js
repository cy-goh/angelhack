//initializes app
var app = app || {};

app.DevelopersView = Backbone.View.extend({

  el: '#developersContainer',

  initialize: function(options) {
    _.bindAll();
    var that = this;

    this.collection.fetch({
      success: function() {
        that.addAll();
      }
    })
  },

  addOne: function( developer ) {
    var tempHTML = new app.DeveloperView( {model: developer} );
    this.$el.append(tempHTML.render().el);
  },

  addAll: function() {
    this.collection.forEach( function( developer ) {
        this.addOne( developer );
    }, this );
  }  
}); //end app.DevelopersView


app.DeveloperView = Backbone.View.extend({

  tagName: 'div',
  className: 'span6 developer widget-activity',
  template: _.template( $('#developer-template').html() ),
  
  initialize: function() {
    //use name of candidate as identifying factor, stored in data-id
    this.$el.attr('data-name-id', this.model.get('name') + "," + this.model.get('id') );
  }, 

  render: function() {

    var tempHTML = new app.CommentsView({collection: app.comments, givenTo: this.model.get('id')});
    this.$el.html( this.template( {model: this.model.toJSON() } ) );

    //appends the comment list
    this.$el.append(tempHTML.el);
    return this;
  }
});

