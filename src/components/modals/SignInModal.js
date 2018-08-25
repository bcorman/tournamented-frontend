import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import SignInForm from '../forms/SignInForm';

export default class SignInModal extends Component {
  render() {
    return (
      <Modal trigger={<Button name='signInShow'>Sign In</Button>}>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <SignInForm />
        </Modal.Content>
      </Modal>
    );
  }
}
