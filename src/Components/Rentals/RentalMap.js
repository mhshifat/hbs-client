import React, { Component } from "react";
import MapWithAMarker from "../Maps/GoogleMaps";

class RentalMap extends Component {
  render() {
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_MfqGBrjKw3RkgpvEyZifOqfb0BwuQ8g&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={this.props.location}
      />
    );
  }
}

export default RentalMap;
