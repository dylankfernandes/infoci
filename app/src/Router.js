import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactList from './layouts/ContactList/ContactList';
import Profile from './layouts/Profile/Profile';

const Router = () => (
  <main>
    <Switch>
      <Route exact path = '/' component = {ContactList} />
      <Route exact path = '/profile' component = {Profile} />
    </Switch>
  </main>
);

export default Router;

