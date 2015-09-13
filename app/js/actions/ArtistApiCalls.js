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
              "name": "Kanye",
              "genres": ["HipHop", "Rap"]
          },
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Tupac",
              "genres": ["Rap", "Alternative"]
          }
        ]
    }
    if (festival == "Coachella") {
      festivalArtists =
        [
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Artist 1",
              "genres": ["HipHop", "Alternative"]
          },
          {
              "id": 1,
              "created": "2015-08-29T15:55:06+0000",
              "name": "Artist 2",
              "genres": ["Alternative", "Rap"]
          }
        ]
    }

    return festivalArtists;
  }

}
