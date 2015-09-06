import Dispatcher from '../dispatchers/dispatcher';
import Store from './CoreStore';
import Constants from '../constants/ArtistActionConstants.js';

var _artists = [];

function Artist(artist) {
  //reformat the festival object to match what you want
  this.id = artist.artist_id;
  this.name = artist.name;
}

function loadArtists(artists) {
  artists.forEach(createArtist);
}

function createArtist(artist, index, array){
  let newArtist = new Artist(artist);
  _artists.push(newArtist);
}

class ArtistStore extends Store {

  getArtists() {
    return _artists;
  }

}

var ArtistsStore = new ArtistStore();

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case Constants.ARTISTS_LOADED:
      loadArtists(action.data);
      ArtistsStore.emitChange();
      break;

  }
})

export default ArtistsStore;
