var createAppController = require( './app_controller' );

var boot = function(){
  var appContainer = document.getElementsByTagName('main')[0];
  createAppController(appContainer);
};

setTimeout( boot, 0 );
