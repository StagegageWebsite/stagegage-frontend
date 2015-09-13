import React from 'react';
import Assign from 'object-assign';

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

    this.genreHandler = this.genreHandler.bind(this);
  }

  genreHandler() {
    var nextState = this.state;
    var genre = event.target.value;
    nextState[genre] = !nextState[genre];
    this.setState(nextState);

  }

  _onSubmit() {
    let state = Assign({}, this.state);
    this.props.selectedGenres(state);
  }

  render() {
    var blah = (
      <form className="Form" onSubmit={this._onSubmit.bind(this)}>
        <div className="checkbox" >
          <label>
            <input type="checkbox" value="HipHop" onChange={this.genreHandler}> HipHop</input>
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
        <div classNames="submit-buttons">
          <button type="submit" className="primary">Update Results</button>
        </div>
      </form>
 )


    return blah;

  }

}
