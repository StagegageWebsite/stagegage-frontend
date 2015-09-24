import React from 'react';
import Slot from './Slot';
import DraggableArtist from './DraggableArtist';

export default class Board extends React.Component {

  renderSlot(slotPosition) {
    const artist = (slotPosition == this.props.artistPosition) ?
    <DraggableArtist name="Pooja"/> :
    null;

    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: 'blue', border: '1px solid red'}}>
        <Slot>
          {artist}
        </Slot>
      </div>
    )

  }
  render() {
    console.log(this.props.artists);
    const slots = [];
    for (let i = 0; i < this.props.artists.length; i++) {
      slots.push(this.renderSlot(i));
    }
    return (
      <div>
        <h1>Slot Board</h1>
        <div>
          {slots}
        </div>
      </div>
    )
  }
}
