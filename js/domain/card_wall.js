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
  deleteCard: function(cardToDelete){
    var newCards = _.without( this.get('cards'), cardToDelete );
    this.set( 'cards', newCards );
  }
});
