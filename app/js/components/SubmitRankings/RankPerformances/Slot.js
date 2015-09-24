import React from 'react';

export default class Slot extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>

    )
  }
}
