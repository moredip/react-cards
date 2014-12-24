var isKeyPressEventToConfirm = function(e){
  return e.charCode === 13;
};

Cards.EditingWallTitleView = React.createClass({
  propType: {
    onEditConfirmed: React.PropTypes.func.isRequired,
    onEditCanceled: React.PropTypes.func.isRequired
  },
  getInitialState: function(){
    return {
      title: this.props.initialTitle
    };
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this._onChange} onKeyPress={this._onKeyPress} />
        <button className="confirm" onClick={this._onConfirmClicked}></button>
        <button className="cancel" onClick={this._onCancelClicked}></button>
      </div>
    );
  },
  _onChange: function(e){
    this.setState({title: e.target.value});
  },
  _onKeyPress: function(e){
    if( isKeyPressEventToConfirm(e) ){
      this._confirmEdit();
    }
  },
  _onConfirmClicked: function(){
    this._confirmEdit();
  },
  _onCancelClicked: function(){
    this.props.onEditCanceled();
  },
  _confirmEdit: function(){
    this.props.onEditConfirmed(this.state.title);
  }
})
