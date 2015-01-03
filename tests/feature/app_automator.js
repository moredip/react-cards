// AppAutomator is a basic Page Object implementation

var _ = require('underscore'),
    domAutomation = require('./dom_automation');

function getWallTitle(theApp){
  return theApp.find(".title");
}

function clickWallTitle(theApp){
  getWallTitle(theApp).find(".title-text").click();
}

function verifyWallTitleText(theApp,expectedWallTitle){
  var wallTitle = getWallTitle(theApp);
  wallTitle.expectTo().exist;
  wallTitle.expectTo().have.text(expectedWallTitle);
}

function getWallTitleEditBox(theApp){
  return getWallTitle(theApp).find("input[type=text]");
}

function fillOutWallTitleEditBox(theApp,text){
  getWallTitleEditBox(theApp).fillIn(text);
}

function clickWallTitleConfirmButton(theApp){
  getWallTitle(theApp).find('button.confirm').click();
}

function clickWallTitleCancelButton(theApp){
  getWallTitle(theApp).find('button.cancel').click();
}


createAutomatorForApp = function(appContainer){
  var automatedApp = domAutomation( $(appContainer) );
  return {
    verifyWallTitleText: _.partial(verifyWallTitleText,automatedApp),
    clickWallTitle: _.partial(clickWallTitle,automatedApp),
    fillOutWallTitleEditBox: _.partial(fillOutWallTitleEditBox,automatedApp),
    clickWallTitleConfirmButton: _.partial(clickWallTitleConfirmButton,automatedApp),
    clickWallTitleCancelButton: _.partial(clickWallTitleCancelButton,automatedApp)
  };
}

module.exports = createAutomatorForApp;
