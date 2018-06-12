import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appHistory from './utils/history';
import LandingPage from './components/LandingPage';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const App = () => (
  <Provider store={ store }>
    <Router history={appHistory}>
      <Route exact path="/" component={LandingPage} />
    </Router>
  </Provider>
);

export default App;
