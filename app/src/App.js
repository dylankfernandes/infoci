import React from 'react';
import Router from './Router';
import Navbar from './components/Navbar';
import './App.css';
import { Button } from 'antd';

const App = () => (
  <div>
    <Navbar />
    <Router />
  </div>
);

export default App;
