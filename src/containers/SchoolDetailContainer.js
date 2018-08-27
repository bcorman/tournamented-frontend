import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import SchoolDetailPage from '../pages/SchoolDetailPage';

//this component handles API get requests

class SchoolDetailContainer extends Component {
  state = {};

  componentWillMount = () => {
    const allSchools = JSON.parse(localStorage.getItem('schools'));
    let url = this.props.match.params.school;
    let currentSchool = allSchools.filter( school => school._id === url)[0];
    this.setState({school: currentSchool});
  }
  render() {
    return (
      <div>
        <SchoolDetailPage school={this.state.school} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(SchoolDetailContainer);
