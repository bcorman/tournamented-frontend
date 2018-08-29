import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInModal from '../modals/SignInModal';
import SignOutModal from '../modals/SignOutModal';
import SignUpModal from '../modals/SignUpModal';
import './Header.css';

class Header extends Component {


  render() {
    const titleLink = <h1><Link to='/' id='site-title'>Debate Club</Link></h1>

    if (this.props.authenticated) {
      return (
              <Menu size={'large'}>
                {titleLink}
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <small>Welcome {this.props.user.email}</small>
                  </Menu.Item>
                  <Menu.Item>
                    <SignOutModal/>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            )
    } else {
      return (
        <Menu size={'large'}>
          {titleLink}
          <Menu.Menu position='right'>
            <Menu.Item>
              <SignInModal/>
            </Menu.Item>
            <Menu.Item>
              <SignUpModal/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }
}

const mapStateToProps = (state) => {
    return {authenticated: state.auth.authenticated, errorMessage: state.auth.error, user: state.auth.user};
};

export default connect(mapStateToProps)(Header);
