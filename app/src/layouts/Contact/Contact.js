import React, { Component } from 'react';
import axios from 'axios';

import BASE_URL from '../../config';
import ContactList from '../../layouts/ContactList/ContactList';
import './styles.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }

  render() {
    return (
      <div className = "contact-container">
        <h1 className = "title">Dylan Fernandes</h1>
      </div>
    )
  }
}



export default Contact;