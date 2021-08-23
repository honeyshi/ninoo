import 'rsuite/src/styles/index.less';
import 'remixicon/fonts/remixicon.css';
import './theme.less';
import './theme-override.less';

import { Route, Switch } from 'react-router-dom';

import { Forms } from 'pages/Forms';
import { GuidesPage } from 'pages/GuidesPage';
import React from 'react';
import { StartPage } from 'pages/StartPage';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route exact path="/guides">
        <GuidesPage />
      </Route>
      <Forms />
    </Switch>
  );
};
