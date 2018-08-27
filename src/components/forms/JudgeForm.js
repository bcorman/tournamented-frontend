import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class JudgeForm extends Component {
  state = {
    judge: '',
    judges: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  addJudge = (e) => {
    e.preventDefault();
    if (this.state.judges.length < 3) {
      this.state.judges.push(this.state.judge);
      this.setState({ judge: '' })
    }
    console.log(this.state)
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Add judge</label>
          <input name='judge' onChange={this.handleChange} />
        </Form.Field>
        <Button onClick={this.addJudge}>Submit</Button>
      </Form>
    )
  }
}

export default JudgeForm;
