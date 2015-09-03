import axios from 'axios';

function getFestival(festival) {
  // return axios.get(`https://api.blah/${usernmae}/repos`); //string literals
  return { data: [ {
                      name: "Coachella",
                      artists: [ {band: "Kanye West",
                                  ranking: 5},
                                 {band: "The Weeknd",
                                  ranking: 5} ]
                    } ]
   }
};

var RankingsHelpers = {
  getFestivalArtists(festival){
    return axios.all([getFestival(festivalName)])
      .then((arr) => {
        return {
          festival: arr[0].data.artists
        }
      });
  }


};

export default RankingsHelpers;
