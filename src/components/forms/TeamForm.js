import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class TeamForm extends Component {
  state = {
    team: '',
    teams: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  addTeam = (e) => {
    e.preventDefault();
    if (this.state.teams.length < 3) {
      this.state.teams.push(this.state.team);
      this.setState({ team: '' })
    }
    console.log(this.state)
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Add team</label>
          <input name='team' onChange={this.handleChange} />
        </Form.Field>
        <Button onClick={this.addTeam}>Submit</Button>
      </Form>
    )
  }
}

export default TeamForm;
