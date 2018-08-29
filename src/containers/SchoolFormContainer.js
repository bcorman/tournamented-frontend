import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import StudentList from '../components/lists/StudentList';



class SchoolFormContainer extends Component {
  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <StudentList />
          </Grid.Column>
          <Grid.Column width={6}>
          
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default SchoolFormContainer;