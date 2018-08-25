import React, {Component} from 'react';
import axios from 'axios';
import { Form, Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class InitForm extends Component {
    state = {};

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        console.log(this.state);
    };

    render() {
        const rounds = [
            {
                key: 1,
                text: '1',
                value: 1
            }, {
                key: 2,
                text: '2',
                value: 2
            }, {
                key: 3,
                text: '3',
                value: 3
            }, {
                key: 4,
                text: '4',
                value: 4
            }, {
                key: 5,
                text: '5',
                value: 5
            }
        ];
        return (
            <Form>
                <Form.Field>
                    <label>Tournament Name</label>
                    <input name='tournamentName' onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Tournament Date</label>
                    <input type='date' name='tournamentDate' onChange={this.handleChange}/>
                </Form.Field>
                <Form.Select label='Rounds' options={rounds} />
                <Form.Field>
                    <label>Tournament Location</label>
                    <input name='tournamentLocation' onChange={this.handleChange}/>
                </Form.Field>
                <Button as={Link} to='/setup/schools' type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    };
};

export default InitForm;
