import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

import BASE_URL from '../../config';
import './styles.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    let contactId = this.props.match.params.id;
    axios.get(`${BASE_URL}/contacts/${contactId}`)
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    const { 
      firstName,
      lastName,
      phone,
      email,
      id
    } = this.state.user;

    const name = `${firstName} ${lastName}`;

    return (
      <div className = "contact-container">
        <div class = "edit-group">
          <center>
            <Link to = "/">
              <Button size = "large" className = "back-button" type = "primary">
                <Icon type = "caret-left" />
                Back
              </Button>
            </Link>
            <Button size = "large" className = "delete-button" type = "danger">
              <Icon type = "delete" />
              Delete
            </Button>
            <Link to = {`/contacts/edit/${id}`}>
              <Button size = "large" className = "edit-button">
                <Icon type = "edit" />
                Back
              </Button>
            </Link>
          </center>
        </div>
        <h1 className = "title">{name}</h1>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}



export default Contact;