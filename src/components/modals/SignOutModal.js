import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signOutUser } from '../../actions/authActions'

class SignOutModal extends Component {

  signOut = (e) => {
    e.preventDefault()
    this.props.signOutUser()
  }

  render() {

    return (
      <Modal size='small' trigger={<Button name='signOut'>Sign Out</Button>}>
        <Modal.Header>Sign Out</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to sign out?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button
            positive icon='checkmark'
            labelPosition='right'
            content='Yes'
            onClick={this.signOut}/>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    signOutUser: () => {
      dispatch(signOutUser())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignOutModal)
