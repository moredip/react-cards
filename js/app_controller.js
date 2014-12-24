Cards.createAppController = function(appContainer){
  var cardWall = new Cards.CardWall();

  var onCreateCard = function(params){
    cardWall.addCard(params);
  }

  var onDeleteCard = function(card){
    cardWall.deleteCard(card);
  }

  var onEditTitle = function(newTitle){
    cardWall.set('wallTitle', newTitle);
  }

  var buildAppProps = function(){
    return { 
      cards: cardWall.get('cards'),
      wallTitle: cardWall.get('wallTitle'),
      onCreateCard: onCreateCard,
      onDeleteCard: onDeleteCard,
      onEditTitle: onEditTitle
    };
  }

  var renderApp = function(){
    React.render( 
      React.createElement( Cards.CardWallView, buildAppProps() ), 
      appContainer 
    );
  }

  cardWall.addCard({ text: "this card" });
  cardWall.on('change', renderApp);

  renderApp();
}
