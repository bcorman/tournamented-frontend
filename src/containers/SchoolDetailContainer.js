import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchoolDetailPage from '../pages/SchoolDetailPage';
import { setCurrentSchool } from '../actions/loaderActions';

//this component switches between schools


class SchoolDetailContainer extends Component {
  state = {};
  
  setSchool = () => {
    //retrieve all schools from localstorage
    const schools = JSON.parse(localStorage.getItem('schools'))
    let url = this.props.match.params.school;

    //filter through to find school that matches url
    let currentSchool = schools.filter(school => school._id === url)[0]
    this.props.setCurrentSchool(currentSchool);
  }

  componentWillMount = () => {
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    setCurrentSchool: (school) => {
      dispatch(setCurrentSchool(school));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetailContainer);
