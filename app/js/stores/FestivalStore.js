import Dispatcher from '../dispatchers/dispatcher';
import Store from './CoreStore';
import Constants from '../constants/FestivalActionConstants.js';

var _festivals = [];

function Festival(festival) {
  //reformat the festival object to match what you want
  this.id = festival.festival_id;
  this.name = festival.name;
  this.artists = festival.artists;
}

function loadFestivals(festivals) {
  festivals.forEach(createFestival);
}

function createFestival(festival, index, array){
  let newFestival = new Festival(festival);
  _festivals.push(newFestival);
}

class FestivalStore extends Store {

  getFestivals() {
    return _festivals;
  }
}

var festivalStore = new FestivalStore()

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case Constants.FESTIVALS_LOADED:
      loadFestivals(action.data);
      festivalStore.emitChange();
      break;
  }
})

export default festivalStore;
