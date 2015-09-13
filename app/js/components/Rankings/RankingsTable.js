import React from 'react';
import Reactable from 'reactable';
var Table = Reactable.Table;
var Tr = Reactable.Tr;

export default class RankingsTable extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getTable();
  }

  createTableArray(artists, genres) {
    let array = [];
    for (var i in artists) {
      let artist = artists[i];
      for (var j in artist.genres) {
        for (var k in genres) {
          if ((artist.genres[j] == k) && (genres[k] == true)) {
            let artistObject = {
              'Name': artist.name,
              'Genres': artist.genres
            }
            array.push(artistObject);
          }
        }
      }
    }
    return array;
  }

  getTable() {
    var array = this.createTableArray(this.props.festivalArtists, this.props.selectedGenres);
    var table = (<Table className="table" id="table" data={array} filterable={['Name', 'Genres']}/>)
    return table;
  }

  render() {

    return this.getTable();

  }
}
