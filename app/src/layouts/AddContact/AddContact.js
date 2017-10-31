import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Icon, Input, Select } from 'antd';
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
        <h1>AddContact</h1>
      </div>
    )
  }
}

export default AddContact;