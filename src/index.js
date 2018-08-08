import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { AUTH_USER } from './actions/types'

const store = configureStore();

let token = localStorage.getItem('token')
let user = JSON.parse(localStorage.getItem('user'))

if (token && user) {
  store.dispatch({type: AUTH_USER, payload: user })
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
