var domAutomation = window.testHarness.domAutomation;

describe( 'the wall title', function(){
  specify('a wall starts off with a sensible default title', function(){
    var theApp = domAutomation( $(window.testHarness.bootIsolatedApp()) ),
        wallTitle = theApp.find(".title");
    wallTitle.expectTo().to.exist;
    wallTitle.expectTo().to.have.text('The Wall');
  });

  specify('a wall title can be edited', function(){
    var theApp = domAutomation( $(window.testHarness.bootIsolatedApp()) ),
        wallTitle = theApp.find(".title");

    wallTitle.find(".title-text").click();

    var editBox = wallTitle.find('input[type=text]');

    editBox.fillIn('A new wall title');
    wallTitle.find('button.confirm').click();

    wallTitle.expectTo().to.have.text('A new wall title');
  });
});
