import React, {Component} from 'react'
import { PrivateRoute } from '../components/PrivateRoute'
import { Switch } from 'react-router-dom'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import InitializationPage from '../pages/InitializationPage'
import SchoolsPage from '../pages/SchoolsPage'
import './MainContainer.css'

class MainContainer extends Component {
  render() {
    console.log(this.props.location)
      return (
        <div className="main-content">
          <BreadcrumbComponent/>
          <Switch>
            <PrivateRoute path="/setup/schools" component={SchoolsPage} />
            <PrivateRoute path="/setup" component={InitializationPage}/>
          </Switch>
        </div>)
  }
}



export default MainContainer
