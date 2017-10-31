import React, { Component } from 'react';
import axios from 'axios';

import {
  BackButton,
  DeleteButton,
  EditButton
} from '../../components/Button/Button';

import Header from '../../components/Header/Header';
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
            <BackButton />
            <DeleteButton />
            <EditButton id = {id} />
          </center>
        </div>
        <Header>{name}</Header>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}



export default Contact;