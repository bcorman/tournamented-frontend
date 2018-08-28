import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchoolDetailPage from '../pages/SchoolDetailPage';
import { setCurrentSchool } from '../actions/loaderActions';

//this component handles API get requests

class SchoolDetailContainer extends Component {
  state = {};

  setSchool = () => {
    const allSchools = JSON.parse(localStorage.getItem('schools'));
    let url = this.props.match.params.school;
    let currentSchool = allSchools.filter( school => school._id === url)[0];
    setCurrentSchool(currentSchool);
  }

  componentWillMount = () => {
    console.log('component will mount')
    this.setSchool()
  }
  render() {
    return (
      <div>
        <SchoolDetailPage />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentSchool: (school) => {
      dispatch(setCurrentSchool(school));
    }
  }
}

export default connect(mapDispatchToProps)(SchoolDetailContainer);
