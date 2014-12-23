Cards.WallTitleView = React.createClass({
  propType: {
    onClick: React.PropTypes.func.isRequired
  },
  render: function(){
    return (
      <div className="title" onClick={this._onClick}>{this.props.title}</div>
    );
  },
  _onClick: function(e){
    e.preventDefault();
    this.props.onClick();
  }
})
