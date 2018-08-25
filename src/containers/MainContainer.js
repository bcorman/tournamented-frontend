import React, {Component} from 'react';
import { PrivateRoute } from '../components/PrivateRoute';
import { Switch } from 'react-router-dom';
import InitializationPage from '../pages/InitializationPage';
import SchoolsPage from '../pages/SchoolsPage';
import SchoolDetailContainer from '../containers/SchoolDetailContainer';
import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="main-content">
        <Switch>
          <PrivateRoute path="/setup/schools/:school" component={SchoolDetailContainer} />
          <PrivateRoute path="/setup/schools" component={SchoolsPage} />
          <PrivateRoute path="/setup" component={InitializationPage} />
        </Switch>
      </div>
    );
  }
}



export default MainContainer;
