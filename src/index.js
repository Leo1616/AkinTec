import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import People from './components/main/people/People';
import Planet from './components/main/planet/Planet';
import Film from './components/main/film/Film';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/People" component={People} />
        <Route path="/Planet" component={Planet} />
        <Route path="/Film" component={Film} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
