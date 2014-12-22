Cards.NewCardView = React.createClass({
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

    console.log("let's create a new card!", content);
  }
});
