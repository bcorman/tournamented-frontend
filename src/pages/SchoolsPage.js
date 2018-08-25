import React, { Component } from 'react';
import SchoolsForm from '../components/forms/SchoolsForm';
import { Link } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addSchool } from '../actions/formActions';

class SchoolsPage extends Component {

    addSchool = (school) => {
        this.props.addSchool(school);
    }

    render() {

        let schools = this.props.schools.map((school, index) => {
                    return <span key={index}><h3>{school.name}</h3></span>;
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
