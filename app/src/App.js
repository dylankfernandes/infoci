import React from 'react';
import { Layout } from 'antd';

import Router from './Router';
import Navbar from './components/Navbar/Navbar';
import ContactList from './layouts/ContactList/ContactList';
import './App.css';

import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Layout>
      <Navbar />
      <Router />
    </Layout>
  </div>
);

export default App;
