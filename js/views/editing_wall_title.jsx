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
        <input type="text" className="editing-title" value={this.state.title} onChange={this._onChange} />
        <button onClick={this._onConfirmClicked}>Y</button>
        <button onClick={this._onCancelClicked}>N</button>
      </div>
    );
  },
  _onChange: function(e){
    this.setState({title: e.target.value});
  },
  _onConfirmClicked: function(){
    this.props.onEditConfirmed(this.state.title);
  },
  _onCancelClicked: function(){
    this.props.onEditCanceled();
  }
})
