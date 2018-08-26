import React, { Component } from 'react';
import SchoolDetailForm from '../components/forms/SchoolDetailForm';


class SchoolDetailPage extends Component {

  componentWillMount = () => {
    console.log(this.props)
  }
  render() {
    let students = this.props.school.students.length > 0
      ? this.props.school.students.map((student, index) => <li key={index}>{student.name}</li>)
      : null;

    return (
      <div>
        <h3>{this.props.school.name}</h3>
        {students}
        <SchoolDetailForm />
      </div>
    )
  }
}


export default SchoolDetailPage;
