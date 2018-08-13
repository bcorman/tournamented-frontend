import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './components/header/Header'
import LandingPage from './pages/LandingPage'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    if (!this.props.authenticated) {
      return (
        <div className="App">
          <Header />
          <div className="main-content">
            <LandingPage />
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header />
          <MainContainer />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(App);
