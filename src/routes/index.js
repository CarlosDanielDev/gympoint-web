import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import Form from '../pages/Students/Form';
import Plans from '../pages/Plans';
import Enrollments from '../pages/Enrollments';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/students/:id" component={Form} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
