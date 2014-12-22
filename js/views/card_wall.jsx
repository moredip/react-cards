Cards.CardWallView = React.createClass({
  render: function(){
    return (
      <section id="card-wall">
        <Cards.CardsView cards={this.props.cards} />
        <Cards.NewCardView />
      </section>
    );
  }
})
