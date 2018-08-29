import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {AUTH_USER, INIT_TOUR, LOAD_SCHOOLS_BY_TOUR } from './actions/types';

const store = configureStore();

const loadLocalStorage = () => {
  let token = localStorage.getItem('token');
  let user = JSON.parse(localStorage.getItem('user'));
  let tourData = JSON.parse(localStorage.getItem('tourData'));
  let schools = JSON.parse(localStorage.getItem('schools'));
  
  if (tourData) {
    store.dispatch({type: INIT_TOUR, payload: tourData});
  }
  
  if (schools) {
    store.dispatch({type: LOAD_SCHOOLS_BY_TOUR, schools});
  }
  
  if (token && user) {
      store.dispatch({type: AUTH_USER, payload: user});
  }
}

loadLocalStorage();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>, document.getElementById('root')
);
