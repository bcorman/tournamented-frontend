import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SignInModal from '../modals/SignInModal'
import SignOutModal from '../modals/SignOutModal'
import SignUpModal from '../modals/SignUpModal'

class Header extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Menu size={'large'}>
          <h1 id='header-school-name'>
            Tournamented
          </h1>

          <Menu.Menu position='right'>
            <Menu.Item>
              <small>Welcome {this.props.user}</small>
            </Menu.Item>
            <Menu.Item>
              <SignOutModal />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    } else {
      return (
        <Menu size={'large'}>

          <h1 id='header-school-name'>
            Tournamented
          </h1>

          <Menu.Menu position='right'>
            <Menu.Item>
              <SignInModal />
            </Menu.Item>
            <Menu.Item>
              <SignUpModal />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
    user: state.auth.user
  }
}

export default Header
