import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import Root from '../common/components/Root';
import counterApp from '../common/reducers/';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../common/components/Routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__
const store = createStore(counterApp, preloadedState, composeEnhancers());

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
)
