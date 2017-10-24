import React from 'react';

import Router from './Router';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <Router />
  </div>
);

export default App;
