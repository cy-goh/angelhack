//initializes app
var app = app || {};

app.CompanyView = Backbone.View.extend({

  el: '#header',
  model: app.Company,
  template: _.template( $('#header-template').html() ),
  
  initialize: function() {
    var that = this;
    this.model.fetch({success: function() {
      that.render();

      $('#task').jTruncate({
        length: 190,
        minTrail: 0,
        moreText: 'Read More',
        lessText: 'Read Less',
        ellipsisText: '...'
      })
      
      
    }})
  }, 

  render: function() {
    this.$el.html( this.template( {model: this.model.toJSON() } ) );
    return this;
  }
});

