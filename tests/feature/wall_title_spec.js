describe( 'the wall title', function(){
  specify('a wall starts off with a sensible default title', function(){
    $appContainer = $(window.testHarness.bootIsolatedApp());

    $wallTitle = $appContainer.find(".title");
    expect($wallTitle).to.exist;
    expect($wallTitle).to.have.text('The Wall');
  });


});
