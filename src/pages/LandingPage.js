import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import './LandingPage.css';

class LandingPage extends Component {
    state = {};

    beginTournament = () => {
        if (this.props.authenticated) {
            return this.setState({message: 'working'});
        } else {
            return this.setState({message: 'Please sign in to continue'});
        }
    };

    render() {
        return (
            <div className="landing-page">
                <h3 className="welcome">Welcome to Debate Club</h3>
                <img src="#" alt="debate"></img>
                <p>Debate Club is a free tool for debate coaches, tournament directors, and score keepers to manage multi-round debate tournaments. The application will automatically pair teams, assign teams to proposition/opposition, track scores, and manage judge assignments.</p>
                <p>Student information is limited to first name and last initial, and is kept in a secure database. Debate performance data, once stored, is accessible only by coaches and authorized debate staff.</p>
                <p>For more information about how Debate Club works, click on the link in the header to view the documentation.</p>
                <p>Please sign in to view past tournaments, or press the button below to begin a new tournament.</p>
                <Button as={Link} to='/setup' onClick={this.beginTournament}>Start</Button>
                <h4>{this.state.message}</h4>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {authenticated: state.auth.authenticated};
};

export default connect(mapStateToProps)(LandingPage);
