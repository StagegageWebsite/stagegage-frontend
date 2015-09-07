import React from 'react';
import Actions from '../../actions/FestivalActions';
import SelectFestival from './SelectFestival'
import SelectGenre from './SelectGenre'

class Filter extends React.Component{

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Choose Festival</h3>
          <SelectFestival festivals={this.props.festivals} onOptionSelected={this.props.onOptionSelected} />
        </div>
        <div className="row">
          <h3>Select Genre</h3>
          <SelectGenre />
        </div>
      </div>
    )
  }

};

export default Filter;
