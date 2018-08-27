import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentList extends Component {

  render() {
    let students = this.props.students
              ? this.props.students.map((student, index) => <li key={index}>{student.name}</li>)
              : null;
    return (
      <ul>
        <li>student</li>
        <li>student</li>
        <li>student</li>
        <li>student</li>
        <li>student</li>
        <li>student</li>
        {students}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.data.schools);
}

export default connect(mapStateToProps)(StudentList);