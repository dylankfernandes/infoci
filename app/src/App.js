import React from 'react';
import { Button } from 'antd';
import { Layout } from 'antd';

import Router from './Router';
import Navbar from './components/Navbar/Navbar';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div>
    <Layout>
      <Navbar />
      <Layout>
        <Sider>
          Sider
        </Sider>
        <Content>
          <Router />
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default App;
