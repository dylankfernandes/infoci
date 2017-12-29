import React, { Component } from 'react';

class ContactLocation extends Component {
  render() {
    const { user } = this.props;
    const loc = `https://maps.googleapis.com/maps/api/staticmap?project=testgooglemaps&center=${user.location}&zoom=10&size=500x300&markers=color:blue|${user.location}&maptype=roadmap&key=AIzaSyDdv3FhVnk7sUY7eOaMOP_gj7ES9bXkrLg`;
    return <center><img className="map-location" src={loc} /></center>;
  }
}

export default ContactLocation;