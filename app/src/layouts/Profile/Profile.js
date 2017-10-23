import React, { Component } from 'react';

import ContactList from '../ContactList/ContactList';

class Profile extends Component {
  render() {
    return (
      <div>
        <ContactList />
        <h1>Profile</h1>
      </div>
    )
  }
}

export default Profile;