var boot = function(){
  var appContainer = document.getElementsByTagName('main')[0];
  Cards.createAppController(appContainer);
};

setTimeout( boot, 0 );
