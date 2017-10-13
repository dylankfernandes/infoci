import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../../config';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

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
  }

  render() {
    const contactList = this.state.contacts.map((contact, i) => {
      return (
        <li>{contact.firstName}</li>
      )
    })

    return (
      <div>
        <h1>Connections</h1>
        <ul>{contactList}</ul>
      </div>
    )
  }
}

export default ContactList;

