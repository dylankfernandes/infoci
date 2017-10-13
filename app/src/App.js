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

      <Layout className = "container">
        <Content>
          <Router />
          <Button 
            type="primary" 
            shape="circle" 
            icon="plus" 
            className = "add-contact" 
            size = "large">
            <Link to = "/contacts/add"></Link>
          </Button>
        </Content>
      </Layout>

    </Layout>
  </div>
);

export default App;
