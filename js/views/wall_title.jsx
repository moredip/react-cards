Cards.WallTitleView = React.createClass({
  propType: {
    onClick: React.PropTypes.func.isRequired
  },
  render: function(){
    return (
      <span className="title-text" onClick={this._onClick}>{this.props.title}</span>
    );
  },
  _onClick: function(e){
    e.preventDefault();
    this.props.onClick();
  }
})
