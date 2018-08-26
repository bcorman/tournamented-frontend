import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from './configureStore';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {AUTH_USER, INIT_TOUR} from './actions/types';

const store = configureStore();

let token = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user'));
let tourData = JSON.parse(localStorage.getItem('tourData'));

if (tourData) {
  store.dispatch({type: INIT_TOUR, payload: tourData});
}

if (token && user) {
    store.dispatch({type: AUTH_USER, payload: user});
};

ReactDOM.render(<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, document.getElementById('root'));
