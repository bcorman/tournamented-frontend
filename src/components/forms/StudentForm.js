import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './StudentForm.css'

class StudentForm extends Component {
  state = {
    student: '',
    students: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  addStudent = (e) => {
    e.preventDefault();
    if (this.state.students.length < 3) {
      this.state.students.push(this.state.student);
      this.setState({ student: '' })
    }
    console.log(this.state)
  }
  render() {
    return (
      <Form>
        <article className='student-form-text'>
          <h4>Add Student</h4>
          <p>Please input student first name and last initial. Students already in database will appear in the list to the right of this form</p>
        </article>
        <Form.Field inline>
          <input name='student' onChange={this.handleChange} />
          <Button onClick={this.addStudent}><label>Add Student</label></Button>
          
        </Form.Field>
      </Form>
    )
  }
}

export default StudentForm;
