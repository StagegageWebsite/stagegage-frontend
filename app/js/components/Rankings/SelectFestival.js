import React from 'react';
import Actions from '../../actions/FestivalActions';

class SelectFestival extends React.Component{

  constructor(props) {
    super(props)
  }

    handleSubmit() {
      var router = this.context.router;
      var festival = this.refs.username.getDOMNode().value;
      this.refs.username.getDOMNode().value = '';
      Actions.getFestivals();
    }

    render() {
      let blah = (
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group col-sm-5">
              <input type="text" className="form-control" ref="username" />
            </div>
            <div className="form-group col-sm-5">
              <button className="btn btn-block btn-primary" type="submit" >Search Festivals</button>
            </div>
          </form>
        </div>
      )
      let test = (<h1>{this.props.festivals[0].name}</h1>)
      return test;
    }

};

SelectFestival.contextTypes = {
  router: React.PropTypes.func.isRequired
}


export default SelectFestival;
