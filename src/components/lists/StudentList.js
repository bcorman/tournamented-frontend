import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StudentList.css'

class StudentList extends Component {

  render() {
    let students = this.props.students
              ? this.props.students.map((student, index) => <li key={index}>{student.name}</li>)
              : null;
    return (
      <ul className='student-list'>
        {students}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return { students: state.data.currentSchool.students}
}

export default connect(mapStateToProps)(StudentList);