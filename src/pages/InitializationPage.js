import React, {Component} from 'react';
import InitForm from '../components/forms/InitForm';
import { connect } from 'react-redux';
import { initTournament } from '../actions/formActions';
import './InitializationPage.css';

class InitializationPage extends Component {

  initTournament = (tourName, tourDate, tourLocation, tourLength) => {
    let user = this.props.user._id
    this.props.initTournament(tourName, tourDate, tourLocation, tourLength, user);
  }

  render() {
    return (
      <div className="init-page">
        <h3>Setup</h3>
        <p>To begin setting up a tournament, please enter a few details about the event.</p>
        <InitForm init={this.initTournament}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.auth.user};
}

const mapDispatchToProps = (dispatch) => {
  return {
    initTournament: (tourName, tourDate, tourLocation, tourLength, owner) => {
      dispatch(initTournament(tourName, tourDate, tourLocation, tourLength, owner));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitializationPage);
