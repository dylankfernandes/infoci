import React, { Component } from 'react';
import axios from 'axios';
import { Menu, Icon, Switch, Layout } from 'antd';
import { Link } from 'react-router-dom';

import BASE_URL from '../../config';
import './styles.css';

const { Sider, Content } = Layout;
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
        <li className = "contact-list-item">
          <Icon type = "user"/>
          {" " + contact.firstName + " " + contact.lastName}
          <Link to = {`/contacts/${contact.id}`}>
            <Icon type = "right" className = "continue"/>
          </Link>
        </li>
      )
    });

    return (
      <div>
        <ul className = "contact-list">{contactList} </ul>
      </div>
    )
  }
}

export default ContactList;

