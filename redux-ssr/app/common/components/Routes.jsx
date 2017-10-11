import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import App from './App';

const Routes = () =>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/about" render={() => <h1>some about ting</h1>} />
    <Route path="/login" render={() => <Redirect to="/skinout" />} />
  </div>

export default Routes