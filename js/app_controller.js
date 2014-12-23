
Cards.createAppController = function(appContainer){
  var cardsCollection = new Cards.CardsCollection();

  var onCreateCard = function(params){
    cardsCollection.push( _.pick(params,'text') );
  }

  var buildAppProps = function(){
    return { 
      cards: cardsCollection.toJSON(),
      onCreateCard: onCreateCard
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
