import axios from 'axios';
import Constants from '../constants/FestivalActionConstants';
import Dispatcher from '../dispatchers/dispatcher';

export default {

  getFestivals() {
    // API call
    // return axios.get(`https://api.blah/${usernmae}/repos`); //string literals
    let festivals = [
      {
          "festival_id": 1,
          "created": "2015-08-29T15:55:29+0000",
          "name": "Coachella",
          "artists": [
              "1", //with full artist response body
              "2",
              "3"
          ]
      },
      {
          "festival_id": 1,
          "created": "2015-08-29T15:55:29+0000",
          "name": "Bonaroo",
          "artists": [
              "1", //with full artist response body
              "2",
              "3"
          ]
      }
    ]

    Dispatcher.dispatch({
      actionType: Constants.FESTIVALS_LOADED,
      data: festivals
    })
  }

}
