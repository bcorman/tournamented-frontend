import React, { Component } from 'react'
import InitializationPage from '../pages/InitializationPage'
import { Link, Route } from 'react-router'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import './MainContainer.css'

class MainContainer extends Component {
  render() {
    return (
      <div className="main-content">
        <BreadcrumbComponent />
        <InitializationPage />
      </div>
    )
  }
}

export default MainContainer
