import React from 'react';

export default class SelectGenre extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: [null]
    }

  }

  componentDidUpdate(prevProps, prevState) {

  }

  genregenreHandler(event) {
    console.log(event.target.value);
  }

  render() {
    let blah = (
      <form value="blah" onSubmit={this.genreHandler}>
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
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> R&B</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Alternative</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Electronic</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Country</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Rock</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Pop</input>
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Alternative" onChange={this.genreHandler}> Dance</input>
          </label>
        </div>
        <button type="submit" value="HipHop" className="btn btn-default">Update Rankings</button>
      </form> )
    return blah;

  }

}
