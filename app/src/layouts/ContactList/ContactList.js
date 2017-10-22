import React, { Component } from 'react';
import axios from 'axios';
import { Menu, Icon, Switch, Layout } from 'antd';
import { Link } from 'react-router-dom';

import BASE_URL from '../../config';
import Contact from '../../components/Contact/Contact';
import './styles.css';

const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

/* Idea: Change App So that ContactList is on the outside fo the router
and use links for router navigation */
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
          <Icon type = "right" className = "continue"/>
        </li>
      )
    })

    return (
      <div>
        <Sider className = "sidebar" width = {342}>
          <ul className = "contact-list">{contactList} </ul>
        </Sider>
      </div>
    )
  }
}

export default ContactList;

