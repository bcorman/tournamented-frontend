import React, { Component } from 'react';
import SchoolsForm from '../components/forms/SchoolsForm';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { addSchool, loadSchoolsByTournament } from '../actions/formActions';

class SchoolsPage extends Component {


  addSchool = (school) => {
    let tournamentID = this.props.tourData._id;
    console.log(tournamentID)
    this.props.addSchool(school, tournamentID);
  }

  componentWillMount = () => {
    let tournamentID = this.props.tourData._id;
    this.props.loadSchoolsByTournament(tournamentID);
  }

  render() {

    let schools = this.props.schools.map((school, index) => {
      return <Button as={Link} to={`/setup/schools/${school.name}`} key={index}>{school.name}</Button>;
    })

    return (
      <div>
        <h3>Schools</h3>
          <p>Add or view participating schools below.</p>
        <p>Click on a school to add participants and edit details.</p>
          {schools}
          <SchoolsForm addSchool={this.addSchool}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    schools: state.data.schools,
    tourData: state.data.tourData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSchool: (school, tournamentID) => {
      dispatch(addSchool(school, tournamentID));
    },
    loadSchoolsByTournament: (tournamentID) => {
      dispatch(loadSchoolsByTournament(tournamentID));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolsPage);
