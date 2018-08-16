import React, { Component } from 'react'
import SchoolsForm from '../components/forms/SchoolsForm'

class SchoolsPage extends Component {
  render() {
    return (
      <div>
        <h3>Schools</h3>
        <p>Add or view participating schools below.</p>
        <SchoolsForm />
      </div>
    )
  }
}

export default SchoolsPage
