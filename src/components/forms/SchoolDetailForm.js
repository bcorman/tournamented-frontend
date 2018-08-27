import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SchoolDetailForm extends Component {
  state = {
    student: '',
    students: [],
  };

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  };

  addStudent = (e) => {
    e.preventDefault();
    if (this.state.students.length < 3) {
      this.state.students.push(this.state.student);
      this.setState({student: ''})
    }
    console.log(this.state)
  }
  render() {
    return (
      <Form>
        <Form.Field>
            <label>Add Student</label>
            <input name='student' onChange={this.handleChange}/>
        </Form.Field>
        <Button onClick={this.addStudent}>Submit</Button>
      </Form>
    )
  }
}

export default SchoolDetailForm;
