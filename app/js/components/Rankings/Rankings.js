import React from 'react';
import Filter from './Filter';
import FestivalStore from '../../stores/FestivalStore';
import ArtistStore from '../../stores/ArtistStore';
import FestivalActions from '../../actions/FestivalActions';
import ArtistActions from '../../actions/ArtistActions';
import ArtistApiCalls from '../../actions/ArtistApiCalls';
import RankingsTable from './RankingsTable';

export default class Rankings extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      festivals: FestivalStore.getFestivals(),
      festivalArtists: ArtistApiCalls.getFestivalArtists('Bonaroo')
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

    let nextState =
    this.setState({festivalArtists: artists});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
        <h1>Full Rankings</h1>
          <Filter festivals={this.state.festivals} onOptionSelected={this._onOptionSelected.bind(this)}/>
        </div>
        <div className="col-md-8">
        <h1>Results</h1>
          <RankingsTable festivalArtists={this.state.festivalArtists}/>
        </div>
      </div>
    )
  }

}

Rankings.contextTypes = {
  router: React.PropTypes.func.isRequired
}
