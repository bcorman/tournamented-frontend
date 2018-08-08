import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { connect } from 'react-redux'

class BreadcrumbComponent extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Setup</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(BreadcrumbComponent)
