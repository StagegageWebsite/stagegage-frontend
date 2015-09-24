var _selectedArtists = [];

addToSelectedArtists(artist) {
  _selectedArtists.push(artist);
}

class SelectedArtistStore {

  getSelectedArtists() {
    return _artists;
  }

}

var SelectedArtistsStore = new SelectedArtistStore();

export default SelectedArtistStore;
