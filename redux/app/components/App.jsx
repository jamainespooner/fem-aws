import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/notes" render={() => <div>empty notes</div>} />
        <Route path="/notes/:id" render={() => <div>notes</div>} />
        <Route render={() => <div>not found</div>} />
      </Switch>
    </Router>
  </Provider>

export default App
