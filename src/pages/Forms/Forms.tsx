import { Auth, ForgotPassword, Signup } from 'pages/Forms';
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
    </Switch>
  );
};
