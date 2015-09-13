import React from 'react';
import Assign from 'object-assign';

export default class Checkbox extends React.Component {

  render() {

    return (<button onClick={this.props.checkboxHandler} value={this.props.name} type="button" disabled={this.props.clicked}>{this.props.name}</button>)

  }

}

Checkbox.propTypes = {
  checkboxValue: React.PropTypes.string.isRequired,
}
