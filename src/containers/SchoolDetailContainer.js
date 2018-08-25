import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

class SchoolDetailContainer extends Component {
  state = {};

  componentWillMount = () => {
    const url = this.props.match.params.school;
    const allSchools = this.props.data.schools
    let currentSchool = allSchools.filter( school => school.name === url)[0]
    this.setState({school: currentSchool});
  }
  render() {
    let school = this.state.school
    return (
      <div> {school.name} Container</div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(SchoolDetailContainer);
