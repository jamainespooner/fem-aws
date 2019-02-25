import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

const App = ({ store }) =>
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/notes" render={() => <div>notes</div>} />
        <Route path="/contact" render={() => <div>contact</div>} />
      </div>
    </Router>
  </Provider>

export default App
