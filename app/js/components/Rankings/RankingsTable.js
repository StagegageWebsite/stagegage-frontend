import React from 'react';
import Reactable from 'reactable';
var Table = Reactable.Table;
var Tr = Reactable.Tr;

export default class RankingsTable extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  createTableArray(artists) {
    let array = [];
    for (var i = 0; i < artists.length; i++) {
      let artist = artists[i];
      let artistObject = {
        'Name': artist.name
      }
      array.push(artistObject);
    }
    return array;

  }

  getTable() {
    var array = this.createTableArray(this.props.festivalArtists);
    var table = (<Table className="table" id="table" data={array} filterable={['Name']}/>)
    return table;
  }

  render() {

    return this.getTable();

  }
}
