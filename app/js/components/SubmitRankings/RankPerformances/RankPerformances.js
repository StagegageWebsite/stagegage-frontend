import React from 'react';
import Slot from './Slot';
import DraggableArtist from './DraggableArtist';
import Board from './Board'

export default class RankPerformances extends React.Component {

  render() {
    var artists = ["Kanye", 'Tupac', 'Drake'];
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">

          </div>
          <div className="col-md-4">
            <Board artistPosition="1" artists={artists} />
          </div>
        </div>
      </div>

    )
  }
}
