import React from 'react';
import { Checkbox } from 'react-btn-checkbox';

export default class SelectGenre extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'HipHop': false,
      'Rap': false,
      'Alternative': false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let genres = [];
    if (this.state.HipHop) {
      genres.push("HipHop");
    }
    if (this.state.Rap) {
      genres.push("Rap");
    }
    if (this.state.Alternative) {
      genres.push("Alternative");
    }
    this.props.selectGenres(genres);
  }

  render() {

    return (<Checkbox
      options={this.state}
      onChange={this.setState.bind(this)}
      bootstrap />)

  }

}
