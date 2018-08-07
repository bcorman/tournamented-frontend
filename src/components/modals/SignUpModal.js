import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUpForm from '../forms/SignUpForm'

export default class SignUpModal extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = () => this.setState({modalOpen: true})
  handleClose = () => this.setState({modalOpen: false})

  render() {
    return (
      <Modal trigger={<Button name='signInShow' onClick={this.handleOpen}>Sign Up</Button>}
             open={this.state.modalOpen}
             onClose={this.handleClose}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <SignUpForm />
        </Modal.Content>
      </Modal>
    )
  }
}
