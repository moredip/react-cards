Cards.NewCardView = React.createClass({
  propType: {
    onCreateCard: React.PropTypes.func.isRequired
  },

  render: function(){
    return (
      <section id="new-card">
        <textarea placeholder="Make a new card here" ref="content"></textarea>
        <button className="add" onClick={this._onClick}>+</button>
      </section>
    );
  },

  _onClick: function(e){
    e.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();

    this.props.onCreateCard({text: content});
  }
});
