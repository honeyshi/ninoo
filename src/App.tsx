import 'rsuite/src/styles/index.less';
import 'remixicon/fonts/remixicon.css';
import './theme.less';

import { Route, Switch } from 'react-router-dom';

import { Auth } from 'pages/Auth';
import React from 'react';
import { StartPage } from 'pages/StartPage';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
};
