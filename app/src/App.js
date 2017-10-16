import React from 'react';
import { Layout, Button, Icon } from 'antd';

import Router from './Router';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div>
    <Layout>
      <Navbar />
      <Router />
    </Layout>
  </div>
);

export default App;
