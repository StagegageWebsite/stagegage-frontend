import React from 'react';
import Filter from './Filter';
import FestivalStore from '../../stores/FestivalStore'
import Actions from '../../actions/FestivalActions'

export default class Rankings extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      festivals: FestivalStore.getFestivals()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    FestivalStore.addChangeListener(this._onChange);
    Actions.getFestivals();
  }

  componentWillUnmount() {
    FestivalStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="row">
      <h1>Full Rankings</h1>
        <div className="col-md-4">
          <Filter />
        </div>
        <div className="col-md-8">
          <h1>Genres</h1>
        </div>
      </div>
    )
  }

  _onChange() {
    this.setState({
      festivals: FestivalStore.getfestivals();
    });
  }

};

Rankings.contextTypes = {
  router: React.PropTypes.func.isRequired
}