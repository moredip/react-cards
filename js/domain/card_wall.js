Cards.CardWall = Backbone.Model.extend({
  defaults: function(){
    return {
      wallTitle: "The Wall",
      cards: []
    };
  },
  addCard: function(cardParams){
    var newCard = new Cards.Card( _.pick(cardParams,'text') );
    var newCards = this.get('cards').concat( newCard );
    this.set( 'cards', newCards );
  },
  cardsAsJSON: function(){
    return _.map( this.get('cards'), function(c){ return c.toJSON(); } );
  }
});
