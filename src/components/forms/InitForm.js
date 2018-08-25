import React, {Component} from 'react';
import { Form, Button, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class InitForm extends Component {
    state = {
      tourName: '',
      tourDate: '',
      tourLocation: '',
      tourLength: 0
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    roundSelect = (e, { value }) => {
      this.setState({tourLength: value })
    };

    handleSubmit = (e) => {
      this.props.init(this.state.tourName, this.state.tourDate, this.state.tourLocation, this.state.tourLength);
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
                    <input name='tourName' onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Tournament Date</label>
                    <input type='date' name='tourDate' onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field
                   control={Select}
                   name='tourLength'
                   label='Number of Rounds'
                   options={rounds}
                   onChange={this.roundSelect}>
                </Form.Field>
                <Form.Field>
                    <label>Tournament Location</label>
                    <input name='tourLocation' onChange={this.handleChange}/>
                </Form.Field>
                <Button as={Link} to='/setup/schools' type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    };
};

export default InitForm;
