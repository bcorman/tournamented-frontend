import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class Coachform extends Component {
  state = {
    coach: '',
    coaches: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  addStudent = (e) => {
    e.preventDefault();
    if (this.state.coaches.length < 3) {
      this.state.coaches.push(this.state.coach);
      this.setState({ coach: '' })
    }
    console.log(this.state)
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Add Coach</label>
          <input name='coach' onChange={this.handleChange} />
        </Form.Field>
        <Button onClick={this.addCoach}>Submit</Button>
      </Form>
    )
  }
}

export default Coachform;
