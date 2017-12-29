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
            <p><strong>Phone Number: </strong>{user.phone}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Location: </strong>{user.location}</p>
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?project=testgooglemaps&center=Bristow,VA&zoom=10&size=500x300&markers=color:blue|Bristow,VA&maptype=roadmap&key=AIzaSyDdv3FhVnk7sUY7eOaMOP_gj7ES9bXkrLg"
            />
            <br />
          </Col>
          <Col span={12}>
            <div class="contact-name">
              <Header>{user.firstName}</Header>
              <Header>{user.lastName}</Header>
            </div>
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