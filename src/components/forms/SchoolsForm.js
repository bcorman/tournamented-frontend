import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

class SchoolsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: ''
        };

        this.handleChange = this.handleChange.bind(this);
  };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    newSchool = (e) => {
        if (this.state.schoolName.length > 0 ) {
            console.log('newSchool hit')
            this.props.addSchool(this.state.schoolName);
            this.setState({schoolName: ''});
        };
    };

    render() {

        return (
            <Form>
                <Form.Field inline>
                    <label>School Name</label>
                    <input name='schoolName' onChange={this.handleChange}/>
                    <Button onClick={this.newSchool}>Add School</Button>
                </Form.Field>
            </Form>
        );
    };
};

export default SchoolsForm;
