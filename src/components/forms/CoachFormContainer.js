import React, { Component } from 'react';
import CoachForm from './CoachForm';
import { Grid } from 'semantic-ui-react';

class CoachFormContainer extends Component {
  render() {
    return (
      <div>
        Coach Form Container
        <Grid columns={2}>
          <Grid.Column width={8}>
            <CoachForm />
          </Grid.Column>
          <Grid.Column width={4}>
            List goes here
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CoachFormContainer;