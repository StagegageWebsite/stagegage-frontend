import React from 'react';

export default class SelectGenre extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HipHop: false,
      Rap: false,
      RnB: false,
      Alternative: false,
      Electronic: false,
      Country: false,
      Rock: false,
      Pop: false,
      Dance: false
    }

  }

  genreHandler(event) {
    var nextState = this.state;
    var genre = event.target.value;
    nextState[genre] = !nextState[genre];
    this.setState(nextState);
  }

  render() {
    let blah = (
      <div>
        <div className="checkbox" >
          <label>
            <input type="checkbox" value="HipHop" onChange={this.genreHandler} > HipHop</input>
          </label>
        </div>
        <div className="checkbox" >
          <label>
            <input type="checkbox" value="Rap" onChange={this.genreHandler}> Rap</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="RnB" onChange={this.genreHandler}> R&B</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Alternative</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Electronic" onChange={this.genreHandler}> Electronic</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Country" onChange={this.genreHandler}> Country</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Rock" onChange={this.genreHandler}> Rock</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Pop" onChange={this.genreHandler}> Pop</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Dance" onChange={this.genreHandler}> Dance</input>
          </label>
        </div>
      </div>
 )
    return blah;

  }

}
