import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { Redirect } from 'react-router-dom';

import {
  BackButton,
  DeleteButton,
  EditButton
} from '../../components/Button/Button';

import ContactHeader from './ContactHeader';
import ContactMedia from './ContactMedia';
import ContactLocation from './ContactLocation';

import Header from '../../components/Header/Header';
import BASE_URL from '../../config';
import './styles.css';

const GOOGLE_MAPS_KEY = 'AIzaSyB4_MSG_e3MMO9f8VsuhWuRvEGK1ejk0lM';

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
    const { user } = this.state;
    
    return (
      <div className = "contact-container">
        <div className = "edit-group">
          <center>
            <BackButton />
            <DeleteButton delete = {this.onDelete.bind(this)}/>
            <EditButton id = {user.id} />
          </center>
        </div>
        <br />
        <Row>
          <Col span = {12}>
            <p className = "float-left"><strong>Phone Number: </strong>{user.phone}</p>
            <p className="float-right"><strong>Email: </strong>{user.email}</p>
            <br />
            <center>
              <ContactLocation user={user} />
              <p><strong>Location: </strong>{user.location}</p>
              <ContactMedia user={user} />  
            </center>
            <br />
            <br />
          </Col>
          <Col span={12}>
            <ContactHeader user={user} />
          </Col>
        </Row>
        {this.state.fireRedirect && (
          <Redirect to={'/'}/>
        )}
      </div>
    )
  }
}

export default Contact;