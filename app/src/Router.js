import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './layouts/Profile/Profile';
import Contact from './components/Contact/Contact';

const Router = () => (
  <main>
    <Switch>
      <Route exact path = '/' component = {Profile} />
      <Route exact path = '/profile' component = {Profile} />
      <Route exact path = '/contacts/:id' component = {Contact} />
    </Switch>
  </main>
);

export default Router;

