import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactListPage from './layouts/ContactListPage/ContactListPage';
import ProfilePage from './layouts/ProfilePage/ProfilePage';

const Router = () => (
  <main>
    <Switch>
      <Route exact path = '/' component = {ContactListPage} />
      <Route exact path = '/profile' component = {ProfilePage} />
    </Switch>
  </main>
);

export default Router;

