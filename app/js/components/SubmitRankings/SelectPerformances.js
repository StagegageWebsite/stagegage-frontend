import React from 'react';
import FestivalStore from '../../stores/FestivalStore';
import ArtistStore from '../../stores/ArtistStore';
import FestivalActions from '../../actions/FestivalActions';
import ArtistActions from '../../actions/ArtistActions';
import ArtistApiCalls from '../../actions/ArtistApiCalls';
import Checkbox from '../Checkbox/Checkbox';
import SelectFestival from '../Rankings/SelectFestival';
import ArtistList from './ArtistList';

export default class SelectPerformances extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      festivals: FestivalStore.getFestivals(),
      festivalArtists: ArtistApiCalls.getFestivalArtists('Bonaroo'),
    };

    this._onChange = this._onChange.bind(this);

   }

  componentDidMount() {
    FestivalStore.addChangeListener(this._onChange);
    FestivalActions.getFestivals();

  }

  componentWillUnmount() {
    FestivalStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      festivals: FestivalStore.getFestivals()
    });
  }

  _onOptionSelected(selected, e) {
    let artists = ArtistApiCalls.getFestivalArtists(selected.name);
    this.setState({festivalArtists: artists});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>What Festival Are You Attending?</h3>
          <SelectFestival festivals={this.state.festivals} onOptionSelected={this._onOptionSelected.bind(this) } />
        </div>
        <div className="row">
          <h3>What Artists Did You See?</h3>
          <ArtistList artists={this.state.festivalArtists} />
        </div>
        <div className="row">
          <h3>Now Rank Em</h3>
          <a href="file:///Users/Pooja/Projects/stagegage-frontend/public/index.html#/RankPerformances">>>>></a>
        </div>
      </div>
    )
  }
}

SelectPerformances.contextTypes = {
  router: React.PropTypes.func.isRequired
}
