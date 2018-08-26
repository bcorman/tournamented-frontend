import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SchoolDetailForm extends Component {
  state = {};

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Add Student</label>
          <span>
            <input width={2} type='text' placeholder='Student Name' />
            <Button>Add Student</Button>
          </span>
        </Form.Field>
      </Form>
    )
  }
}

export default SchoolDetailForm;
