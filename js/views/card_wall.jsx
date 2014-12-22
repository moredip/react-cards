Cards.CardWallView = React.createClass({
  render: function(){
    return (
      <section id="card-wall">
        <div className="title">My Card Wall</div>
        <Cards.CardsView cards={this.props.cards} />
        <Cards.NewCardView />
      </section>
    );
  }
})
