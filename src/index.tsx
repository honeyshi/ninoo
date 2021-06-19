import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from 'core/history';

const root = (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(root, document.getElementById('root'));
