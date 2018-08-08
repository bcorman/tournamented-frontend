import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signInUser } from '../../actions/authActions'

class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = (e) => {
    this.props.signInUser(this.state.email, this.state.password)
  }
  render() {
    return (
      <Form>
        <Form.Input required
          label='Email'
          name='email'
          type='email'
          onChange={this.handleChange} />
        <Form.Input required
          label='Password'
          type='password'
          name='password'
          onChange={this.handleChange} />
        <Message success
          header='Success'
          content="Log in successful." />
        <Message error
          header='Log In Failed'
          content='Please verify your username and password and try again.' />
        <Button type='submit' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    signInUser: (email, password) => {
      dispatch(signInUser(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
