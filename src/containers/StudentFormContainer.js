import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import StudentForm from '../components/forms/StudentForm';
import StudentList from '../components/lists/StudentList';

class StudentFormContainer extends Component {
  render() {
    return (
      <div>
        Student Form Container
        <Grid columns={2}>
          <Grid.Column width={8}>
            <StudentForm />
          </Grid.Column>
          <Grid.Column width={4}>
            <StudentList />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default StudentFormContainer;