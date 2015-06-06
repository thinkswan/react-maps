var React = require('react');
var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');

var App = React.createClass({

  getInitialState: function() {
    // Load favorites from local storage
    var favorites = [];

    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }

    // Center map on Paris by default
    return {
      favorites: favorites,
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    };
  },

  toggleFavorite: function(address) {
    if (this.isAddressInFavorites(address)) {
      this.removeFromFavorites(address);
    } else {
      this.addToFavorites(address);
    }
  },

  addToFavorites: function(address) {
    var favorites = this.state.favorites;

    favorites.push({
      address: address,
      timestamp: Date.now()
    });

    this.setState({ favorites: favorites });
    localStorage.favorites = JSON.stringify(favorites);
  },

  removeFromFavorites: function(address) {
    var favorites = this.state.favorites;
    var index = -1;

    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].address == address) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      favorites.splice(index, 1);

      this.setState({ favorites: favorites });
      localStorage.favorites = JSON.stringify(favorites);
    }
  },

  isAddressInFavorites: function(address) {
    var favorites = this.state.favorites;

    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].address == address){
        return true;
      }
    }

    return false;
  },

  searchForAddress: function(address) {
    var self = this;
    var callback = function(results, status) {
      if (status !== 'OK') return;

      var latlng = results[0].geometry.location;
      var state = {
        currentAddress: results[0].formatted_address,
        mapCoordinates: {
          lat: latlng.lat(),
          lng: latlng.lng()
        }
      }

      self.setState(state);
    };

    GMaps.geocode({
      address: address,
      callback: callback
    });
  },

  render: function() {
    return (
      <div>
        <h1>Your Locations</h1>

        <Search onSearch={this.searchForAddress} />

        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />

        <CurrentLocation address={this.state.currentAddress}
          favorite={this.isAddressInFavorites(this.state.currentAddress)}
          onFavoriteToggle={this.toggleFavorite} />

        <LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentAddress}
          onClick={this.searchForAddress} />

      </div>
    );
  }

});

module.exports = App;
