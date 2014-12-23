
Cards.createAppController = function(appContainer){
  var cardsCollection = new Cards.CardsCollection();
  var wallTitle = "Your Card Wall";

  var onCreateCard = function(params){
    cardsCollection.push( _.pick(params,'text') );
  }

  var onEditTitle = function(newTitle){
    wallTitle = newTitle;
    renderApp();
  }

  var buildAppProps = function(){
    return { 
      cards: cardsCollection.toJSON(),
      wallTitle: wallTitle,
      onCreateCard: onCreateCard,
      onEditTitle: onEditTitle
    };
  }

  var renderApp = function(){
    React.render( 
      React.createElement( Cards.CardWallView, buildAppProps(cardsCollection) ), 
      appContainer 
    );
  }

  cardsCollection.push({ text: "this card" });
  cardsCollection.push({ text: "another card" });
  cardsCollection.on('all', renderApp);

  renderApp();

  //cardStore.onChange = function(cardStore) {
    //cardWallView.setState( {cards: cardStore.getCards()} );
  //}
}
