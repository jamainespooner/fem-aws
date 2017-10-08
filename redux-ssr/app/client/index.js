import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../common/components/App';
import counterApp from '../common/reducers/';

const preloadedState = window.__PRELOADED_STATE__
const store = createStore(counterApp, preloadedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
