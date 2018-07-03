import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { hashHistory } from 'react-router';
import Login from './components/login.jsx';
import planetsDetail from './components/PlanetsDetail.jsx';

import store from './store';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let { store } = this.context;
  }

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/planetsDetail" component={planetsDetail} />
          </div>
        </Router>
    )
  }
}

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')

);