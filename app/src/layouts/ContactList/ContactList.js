import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../../config';
import { Menu, Icon, Switch, Layout } from 'antd';
import { Link } from 'react-router-dom';
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
          {contact.firstName + " " + contact.lastName}
          <Icon type = "right" className = "continue"/>
        </li>
      )
    })

    return (
      <div>
        <Layout>
          <Sider className = "sidebar" width = {342}>
            <ul className = "contact-list">{contactList} </ul>
          </Sider>
          <Content>
            <h1>Connections</h1>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default ContactList;

