var React = require('react');

var Map = React.createClass({

  // componentDidMount() is called when the component is initialized
  componentDidMount: function() {
    // Update the map on page load
    this.componentDidUpdate();
  },

  componentDidUpdate: function() {
    if (this.lastLat == this.props.lat && this.lastLng == this.props.lng) {
      return;
    }

    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng

    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });

    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng
    });
  },

  render: function() {
    return (
      <div className="map-holder">
        <p>Loading...</p>

        <div id="map"></div>
      </div>
    );
  }

});

module.exports = Map;
