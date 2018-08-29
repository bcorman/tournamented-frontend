import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


// COMPONENT MAY NOT BE IMPLEMENTED

class SchoolNavBar extends Component {

  render() {
    let schoolTabs = this.props.schools.map((school, index) => {
      return <Link {... school} as={Tab} key={index} to={`/${school._id}`}>{school.name}</Link>
    })

    return (
      {schoolTabs}
    )
  }
}

const mapStateToProps = state => {
  return { schools: state.data.schools}
}

export default connect(mapStateToProps)(SchoolNavBar);