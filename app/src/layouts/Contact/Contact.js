import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

import {
  BackButton,
  DeleteButton,
  EditButton
} from '../../components/Button/Button';

import Header from '../../components/Header/Header';
import BASE_URL from '../../config';
import './styles.css';

import TwitterCard from '../../components/TwitterCard/TwitterCard';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
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
      id,
      twitterHandle
    } = this.state.user;

    const name = `${firstName} ${lastName}`;

    return (
      <div className = "contact-container">
        <div className = "edit-group">
          <center>
            <BackButton />
            <DeleteButton />
            <EditButton id = {id} />
          </center>
        </div>
        <center>
          <Header>{name}</Header>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <br/><br/>
          <hr className = "divider"/>
        </center>
        <br/><br/>
        <TwitterCard />
      </div>
    )
  }
}



export default Contact;