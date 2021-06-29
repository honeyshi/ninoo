import { Auth, ForgotPassword, ResetPassword, Signup } from 'pages/Forms';
import { Route, Switch } from 'react-router-dom';

import React from 'react';

export const Forms: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route exact path="/reset-password">
        <ResetPassword />
      </Route>
    </Switch>
  );
};
