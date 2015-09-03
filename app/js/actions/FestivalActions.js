import axios from 'axios';
var Constants = require('../constants/constants');
var Dispatcher = require('../dispatchers/dispatcher');

export default {

  getFestivals() {
    // API call
    // return axios.get(`https://api.blah/${usernmae}/repos`); //string literals
    let festivals = { data: [{ name: "Coachella", artists: ["Kanye West", "Modest Mouse"]},
                            { name: "Bonaroo", artists: ["Chvrches", "Glass Animals"]} ]  };
    Dispatcher.dispatch({
      actionType: Constants.FESTIVAL_LOADED,
      data: festivals
    });
  };

}
