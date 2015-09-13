import React from 'react';
import Checkbox from '../Checkbox/Checkbox'
import Assign from 'object-assign'

export default class ArtistList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedArtists: []
    }
  }

  componentWillReceiveProps(){
    this.setState({selectedArtists: []});
  }

  checkboxHandler(e) {
    let artist = e.target.value;
    let selected = this.state.selectedArtists;
    if (selected.length == 0){
      selected.push(artist);
      this.setState({selectedArtists: selected});
      return;
    }
    for (var a in selected){
      if (selected[a] == artist) {
        if (a == 0){
          selected.splice(a, 1);
        }
        else {
          selected.splice(a);
        }
        this.setState({selectedArtists: selected});
        return;
      }
      selected.push(artist)
    }
    this.setState({selectedArtists: selected});
  }

  render() {
    var checkboxes = this.props.artists.map((artist, index) => {
      return (<div><Checkbox checkboxHandler={this.checkboxHandler.bind(this)} name={artist.name}/></div>);
    });


    return (<div>{checkboxes}</div>);
  }
}
