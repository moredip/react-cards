var createAutomatorForApp = window.testHarness.createAutomatorForApp;

describe( 'the wall title', function(){
  var automator;
  beforeEach( function(){
    automator = createAutomatorForApp(window.testHarness.bootIsolatedApp());
  });

  specify('a wall starts off with a sensible default title', function(){
    automator.verifyWallTitleText('The Wall');
  });

  specify('a wall title can be edited', function(){
    automator.clickWallTitle();
    automator.fillOutWallTitleEditBox('A new wall title');
    automator.clickWallTitleConfirmButton();
    automator.verifyWallTitleText('A new wall title');
  });

  specify('editing a wall title can be canceled', function(){
    automator.clickWallTitle();
    automator.fillOutWallTitleEditBox('A new wall title');
    automator.clickWallTitleCancelButton();
    automator.verifyWallTitleText('The Wall');
  });

});
