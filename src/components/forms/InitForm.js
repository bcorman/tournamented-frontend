import React, { Component } from 'react'
import { Form, Button, Dropdown, Menu } from 'semantic-ui-react'

class InitForm extends Component {
  state = {}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const rounds = [
      {key: 1, text: '1', value: 1},
      {key: 2, text: '2', value: 2},
      {key: 3, text: '3', value: 3},
      {key: 4, text: '4', value: 4},
      {key: 5, text: '5', value: 5}
    ]
    return (
      <Form>
        <Form.Field>
          <label>Tournament Name</label>
          <input name='tournamentName' placeholder='Tournament Name' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Tournament Date</label>
          <input name='tournamentDate' placeholder='Tournament Date' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Number of Rounds</label>
          <input name='tournamentLength' placeholder='fix this when you have internet' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Tournament Location</label>
          <input name='tournamentLocation' placeholder='Tournament Location' onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default InitForm;
