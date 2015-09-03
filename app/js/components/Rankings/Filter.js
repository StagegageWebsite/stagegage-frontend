import React from 'react';
import Actions from '../../actions/FestivalActions';
import SelectFestival from './SelectFestival'

class Filter extends React.Component{

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Choose Festival</h3>
          <SelectFestival festivals={this.props.festivals}/>
          <table>

          </table>
        </div>
        <div className="row">
          <h3>Select Genre</h3>
        </div>
      </div>
    )
  }

};

export default Filter;
