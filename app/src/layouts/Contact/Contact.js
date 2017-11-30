import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { Redirect } from 'react-router-dom';

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
      user: {},
      fireRedirect: false
    };
  }

  onDelete = () => {
    let contactId = this.state.user.id;
    axios.delete(`${BASE_URL}/contacts/${contactId}`)
    .then(res => {
      this.setState({
        fireRedirect: true
      })
    })
    .catch(err => console.log(err))
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
      twitterHandle,
      snapchatHandle,
      facebookHandle,
      instagramHandle
    } = this.state.user;

    const name = `${firstName} ${lastName}`;

    return (
      <div className = "contact-container">
        <div className = "edit-group">
          <center>
            <BackButton />
            <DeleteButton delete = {this.onDelete.bind(this)}/>
            <EditButton id = {id} />
          </center>
        </div>
        <center>
          <Header>{name}</Header>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Twitter Handle: {twitterHandle}</p>
          <br/><br/>
          <hr className = "divider"/>
        </center>
        <br/><br/>
        {this.state.fireRedirect && (
          <Redirect to={'/'}/>
        )}
      </div>
    )
  }
}

export default Contact;