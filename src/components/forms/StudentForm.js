import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import  { addStudent }  from '../../actions/formActions';
import './StudentForm.css';

class StudentForm extends Component {
  state = {
    student: ''
  };

  handleChange = (e) => {
    this.setState({ student: e.target.value })
  };

  addStudent = (e) => {
    e.preventDefault();
    if (this.state.student.length > 2) {
      let schoolID = this.props.match.params.school
      let student = this.state.student
      this.props.addStudent(student, schoolID)
    }
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    addStudent: (student, schoolID) => {
      dispatch(addStudent(student, schoolID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
