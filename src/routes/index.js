import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Students from '~/pages/Students';
import StudentEdit from '~/pages/Students/Edit';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact isPrivate component={Students} />
      <Route path="/students/create" exact isPrivate component={StudentEdit} />
      <Route
        path="/students/update/:student_id"
        exact
        isPrivate
        component={StudentEdit}
      />

      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
