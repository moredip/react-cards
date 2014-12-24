var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Cards.CardView = React.createClass({
  propType: {
    onDeleteCard: React.PropTypes.func.isRequired
  },
  render: function(){
    return (
      <div className="card">
        <p>{this.props.card.get('text')}</p>
        <button className="delete" onClick={this._onDeleteClicked}></button>
        <button className="edit" onClick={this._onEditClicked}></button>
      </div>
    );
  },

  _onDeleteClicked: function(){
    this.props.onDeleteCard(this.props.card);
  }
})

Cards.CardsView = React.createClass({
  propType: {
    onDeleteCard: React.PropTypes.func.isRequired
  },
  render: function(){
    var myProps = this.props;
    var cards = _.map( myProps.cards, function (card) {
      return <Cards.CardView card={card} key={card.cid} onDeleteCard={myProps.onDeleteCard} />;
    });
    return (
      <section>
        <ReactCSSTransitionGroup transitionName="cards">
          {cards}
        </ReactCSSTransitionGroup>
      </section>
    );
  }
});
