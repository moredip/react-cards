var cx = React.addons.classSet;

Cards.CardWallView = React.createClass({
  propType: {
    onCreateCard: React.PropTypes.func.isRequired,
    onEditTitle: React.PropTypes.func.isRequired
  },

  getInitialState: function(){
    return {
      editingTitle: false
    };
  },

  render: function(){
    var title;
    if( this.state.editingTitle ){
      title = <Cards.EditingWallTitleView 
        initialTitle={this.props.wallTitle} 
        onEditConfirmed={this._onTitleEditConfirmed}
        onEditCanceled={this._onTitleEditCanceled} />
    }else{
      title = <Cards.WallTitleView title={this.props.wallTitle} onClick={this._onTitleClicked} />;
    }
    var titleClasses = cx({title:true,editing:this.state.editingTitle});

    return (
      <section id="card-wall">
        <div className={titleClasses}>
          {title}
        </div>
        <Cards.CardsView cards={this.props.cards} />
        <Cards.NewCardView onCreateCard={this.props.onCreateCard} />
      </section>
    );
  },

  _onTitleClicked: function(){
    this.setState({editingTitle:true});
  },

  _onTitleEditConfirmed: function(newTitle){
    this.setState({editingTitle:false});
    this.props.onEditTitle(newTitle);
  },

  _onTitleEditCanceled: function(){
    this.setState({editingTitle:false});
  }

})
