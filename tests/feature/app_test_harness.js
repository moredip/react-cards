var createAppController = require( '../../js/app_controller' ),
    domAutomation = require('./dom_automation');

var bootIsolatedApp = function(exposeOnPage){
  if (typeof exposeOnPage === 'undefined') exposeOnPage = false;

  var appContainer = document.createElement("div");
  createAppController(appContainer);

  if( exposeOnPage ){
    document.body.appendChild(appContainer);
  }

  return appContainer;
};

window.testHarness = {
  bootIsolatedApp: bootIsolatedApp,
  domAutomation: domAutomation
};
