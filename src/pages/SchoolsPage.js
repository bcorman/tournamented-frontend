import React, { Component } from 'react';
import SchoolsForm from '../components/forms/SchoolsForm';

class SchoolsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { schools: [] };

        this.addSchool = this.addSchool.bind(this);
    };

    addSchool = (school) => {
        this.state.schools.push(school);
    };

    render() {

        let schools = this.state.schools.map((school, index) => {
            return <span key={index}><h3>{school}</h3></span>;
        });

        return (
            <div>
                <h3>Schools</h3>
                <p>Add or view participating schools below.</p>
                {schools}
                <SchoolsForm addSchool={this.addSchool}/>
            </div>
        );
    };
};

export default SchoolsPage;
