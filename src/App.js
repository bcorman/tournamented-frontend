import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import Header from './components/header/Header';
import LandingPage from './pages/LandingPage';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <PrivateRoute path="/setup" component={MainContainer}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {authenticated: state.auth.authenticated};
};

export default withRouter(connect(mapStateToProps)(App));
