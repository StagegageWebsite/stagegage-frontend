import axios from 'axios';

export default {
  //
  // NOT FLUXED
  getFestivalArtists(festival) {
    // api call
    let festivalArtists;
    if (festival == "Bonaroo") {
      festivalArtists =
        [
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Kanye"
          },
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Tupac"
          }
        ]
    }
    if (festival == "Coachella") {
      festivalArtists =
        [
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Artist 1"
          },
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Artist 1"
          }
        ]
    }

    return festivalArtists;
  }

}
