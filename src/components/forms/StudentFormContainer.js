import React, { Component } from 'react';
import StudentForm from './StudentForm';

class StudentFormContainer extends Component {
  render() {
    return (
      <div>
        Student Form Container
        <StudentForm />
      </div>
    )
  }
}

export default StudentFormContainer;