import React, {Component} from 'react';
import InitForm from '../components/forms/InitForm';
import './InitializationPage.css';

class InitializationPage extends Component {
    render() {
        return (
            <div className="init-page">
                <h3>Setup</h3>
                <p>To begin setting up a tournament, please enter a few details about the event.</p>
                <InitForm/>
            </div>
        );
    };
};

export default InitializationPage;
