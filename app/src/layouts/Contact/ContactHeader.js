import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class ContactHeader extends Component {
  render() {
    const { firstName, lastName } = this.props.user;
    return (
      <div class="contact-name">
        <Header>{firstName}</Header>
        <Header>{lastName}</Header>
      </div>
    )
  }
}

export default ContactHeader;