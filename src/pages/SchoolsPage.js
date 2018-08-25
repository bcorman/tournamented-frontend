import React, { Component } from 'react';
import SchoolsForm from '../components/forms/SchoolsForm';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { addSchool } from '../actions/formActions';

class SchoolsPage extends Component {

    addSchool = (school) => {
        this.props.addSchool(school);
    }

    render() {

        let schools = this.props.schools.map((school, index) => {
                    return <Button as={Link} to={`/setup/schools/${school.name}`} key={index}>{school.name}</Button>;
        })

        return (
            <div>
                <h3>Schools</h3>
                <p>Add or view participating schools below.</p>
                <p>Click on a school to add participants and edit details.</p>
                {schools}
                <SchoolsForm addSchool={this.addSchool}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { schools: state.data.schools };
}

const mapDispatchToProps = dispatch => {
    return {
        addSchool: (school) => {
            dispatch(addSchool(school));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolsPage);
