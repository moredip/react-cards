var CardWall = appRequire('domain/card_wall');

describe('CardWall', function(){
  it('exists', function(){
    expect(CardWall).to.exist();
  });

  it('has a good default title', function(){
    var wall = new CardWall();
    expect(wall.get('wallTitle')).to.equal('The Wall');
  });
});
