import React, { Component } from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'

class InitForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Tournament Name</label>
          <input placeholder='Tournament Name' />
        </Form.Field>
        <Form.Field>
          <label>Tournament Date</label>
          <input placeholder='Tournament Date' />
        </Form.Field>
        <Form.Field>
          <label>Number of Rounds</label>
          <Dropdown options={[1, 2, 3, 4, 5]} />
        </Form.Field>
        <Form.Field>
          <label>Tournament Location</label>
          <input placeholder='Tournament Location' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default InitForm;
