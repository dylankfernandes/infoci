import React from 'react';
import { Layout } from 'antd';

import Router from './Router';
import Navbar from './components/Navbar/Navbar';
import ContactList from './layouts/ContactList/ContactList';
import './App.css';

import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div>
    <Layout>
      <Navbar />
      <ContactList />
      <Router />
    </Layout>
  </div>
);

export default App;
