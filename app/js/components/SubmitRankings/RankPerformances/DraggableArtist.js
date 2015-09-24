import React from 'react';

export default class DraggableArtist extends React.Component {

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <h3>{this.props.name}</h3>
      </div>

    )
  }
}
