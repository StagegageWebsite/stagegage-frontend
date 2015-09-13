import axios from 'axios';
import Constants from '../constants/ArtistActionConstants';
import Dispatcher from '../dispatchers/dispatcher';

export default {

  //FLUXED
  getArtists() {
    //api call
    let artists = [
      {
          "id": 1,
          "created": "2015-08-29T15:55:06+0000",
          "name": "Artist 1",
          "genre": "HipHop"
      },
      {
          "id": 1,
          "created": "2015-08-29T15:55:06+0000",
          "name": "Artist 1",
          "genre": "Alternative"
      }
    ]

    Dispatcher.dispatch({
      actionType: Constants.ARTISTS_LOADED,
      data: artists
    })
  }

  //NOT FLUXED
  // getFestivalArtists(festival) {
  //   api call
  //   let festivalArtists =
  //     [
  //       {
  //           "id": 1,
  //           "created": "2015-08-29T15:55:06+0000",
  //           "name": "Artist 1"
  //       },
  //       {
  //           "id": 1,
  //           "created": "2015-08-29T15:55:06+0000",
  //           "name": "Artist 1"
  //       }
  //     ]
  //   return festivalArtists;
  // }

}
