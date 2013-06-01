//initializes app
var app = app || {};

app.CompanyView = Backbone.View.extend({

  el: '#header',
  model: app.Company,
  template: _.template( $('#header-template').html() ),
  
  initialize: function() {
    this.render();
  }, 

  render: function() {
    this.$el.html( this.template( {model: this.model.toJSON() } ) );
    return this;
  }
});

