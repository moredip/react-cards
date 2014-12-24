var isKeyPressEventToCreateCard = function(e){
  return e.charCode === 13 && (!e.shiftKey);
};

Cards.NewCardView = React.createClass({
  propType: {
    onCreateCard: React.PropTypes.func.isRequired
  },

  render: function(){
    return (
      <section id="new-card">
        <textarea placeholder="Make a new card here" ref="content" onKeyPress={this._onKeyPress}></textarea>
        <button className="add" onClick={this._onClick}></button>
      </section>
    );
  },

  _onClick: function(e){
    e.preventDefault();
    this._createCard();
  },
  _onKeyPress: function(e){
    if( isKeyPressEventToCreateCard(e) ){
      this._createCard();
    }
  },
  _createCard: function(){
    var contentEl = this.refs.content.getDOMNode();
    var content = contentEl.value.trim();
    contentEl.value = "";

    this.props.onCreateCard({text: content});
  }

});
