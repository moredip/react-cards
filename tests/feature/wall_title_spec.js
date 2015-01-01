var domAutomation = window.testHarness.domAutomation;

describe( 'the wall title', function(){
  var wallTitle;
  beforeEach( function(){
    var theApp = domAutomation( $(window.testHarness.bootIsolatedApp()) );
    wallTitle = theApp.find(".title");
  });

  var clickWallTitle = function(){
    wallTitle.find(".title-text").click();
  }

  specify('a wall starts off with a sensible default title', function(){
    wallTitle.expectTo().exist;
    wallTitle.expectTo().have.text('The Wall');
  });

  specify('a wall title can be edited', function(){
    clickWallTitle();

    var editBox = wallTitle.find('input[type=text]');

    editBox.fillIn('A new wall title');
    wallTitle.find('button.confirm').click();

    wallTitle.expectTo().to.have.text('A new wall title');
  });

  specify('editing a wall title can be canceled', function(){
    clickWallTitle();

    wallTitle.find('input[type=text]').fillIn('A new wall title');
    wallTitle.find('button.cancel').click();

    wallTitle.find('input[type=text]').expectTo().not.exist;
    wallTitle.expectTo().have.text('The Wall');
  });

});
