Cards.CardView = React.createClass({
  render: function(){
    return (
      <div className="card">
        <p>{this.props.text}</p>
      </div>
    );
  }
})

Cards.CardsView = React.createClass({
  render: function(){
    var cards = _.map( this.props.cards, function (card) {
      return <Cards.CardView text={card} />;
    });
    return (
      <section>
        <div class="title">My Card Wall</div>
        {cards}
      </section>
    );
  }
});
