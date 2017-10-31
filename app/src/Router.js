import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactList from './layouts/ContactList/ContactList';
import Contact from './layouts/Contact/Contact';
import AddContact from './layouts/AddContact/AddContact';

const Router = () => (
  <main>
    <Switch>
      <Route exact path = '/' component = {ContactList} />
      <Route exact path = '/contacts/add' component = {AddContact} />
      <Route exact path = '/contacts/:id' component = {Contact} />
    </Switch>
  </main>
);

export default Router;

