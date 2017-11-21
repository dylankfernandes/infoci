import React, { Component } from 'react';
import axios from 'axios';
import {
  Icon,  
  Button 
} from 'antd';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import BASE_URL from '../../config';
import './styles.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  
  componentWillMount() {
    axios.get(BASE_URL + '/contacts')
    .then(res => {
      this.setState({contacts: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const contactList = this.state.contacts.map((contact, i) => {
      return (
        <Link to = {`/contacts/${contact.id}`}>
          <li className = "contact-list-item">
            <Icon type = "user"/>
            {" " + contact.firstName + " " + contact.lastName}
            <Icon type = "right" className = "continue"/>
          </li>
        </Link>
      )
    });

    return (
      <div>
        <div className = "contact-list-header">
          <Header className = "contact-list-title">Contacts</Header>
          <Link to = "/contacts/add">
            <Button size = "large" type = "primary">Add Contact <Icon type = "plus"/></Button>
          </Link>
          <div className="clearfix" />
        </div>
        <ul className = "contact-list">{contactList}</ul>
      </div>
    )
  }
}

export default ContactList;

