import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import counterApp from '../common/reducers/';
import Root from '../common/components/Root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__
const store = createStore(counterApp, preloadedState, composeEnhancers());

render(
  <Root store={store} />,
  document.getElementById('root')
)
