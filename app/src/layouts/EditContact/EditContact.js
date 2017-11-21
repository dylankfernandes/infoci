import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Icon 
} from 'antd';

import Header from '../../components/Header/Header';
import EditContactForm from '../../components/EditContactForm/EditContactForm';

class EditContact extends Component {
  render() {
    return (
      <div className = "add-contact-container">
        <Link to = "/">
          <Button size = "large" type = "primary">
            <Icon type = "caret-left" />
            Back
          </Button>
        </Link>
        <Header>Edit Contact</Header>
        <EditContactForm id = {this.props.match.params.id} />
      </div>
    )
  }
}

export default EditContact;