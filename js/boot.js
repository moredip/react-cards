var boot = function(){
  var cards = ['a card', 'another card'];
  var appContainer = document.getElementsByTagName('main')[0];
  React.render( React.createElement( Cards.CardWallView, {cards:cards} ), appContainer );
};

setTimeout( boot, 0 );
