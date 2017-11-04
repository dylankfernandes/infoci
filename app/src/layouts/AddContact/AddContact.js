import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Icon 
} from 'antd';

import Header from '../../components/Header/Header';
import ContactForm from '../../components/ContactForm/ContactForm';
import './styles.css';

class AddContact extends Component {
  render() {
    return (
      <div class = "add-contact-container">
        <Link to = "/">
          <Button size = "large" type = "primary">
            <Icon type = "caret-left" />
            Back
          </Button>
        </Link>
        <Header>Add Contact</Header>
        <ContactForm />
      </div>
    )
  }
}

export default AddContact;