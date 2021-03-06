import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux'
import StudentFormContainer from '../containers/StudentFormContainer';
import TeamFormContainer from '../containers/TeamFormContainer';
import JudgeFormContainer from '../containers/JudgeFormContainer';
import CoachFormContainer from '../containers/CoachFormContainer';



const panes = [
  { menuItem: 'Students', render: () => <Tab.Pane>{<StudentFormContainer />}</Tab.Pane> },
  { menuItem: 'Teams', render: () => <Tab.Pane>{<TeamFormContainer />}</Tab.Pane> },
  { menuItem: 'Judges', render: () => <Tab.Pane>{<JudgeFormContainer />}</Tab.Pane> },
  { menuItem: 'Coaches', render: () => <Tab.Pane>{<CoachFormContainer />}</Tab.Pane>}
]


class SchoolDetailPage extends Component {
  
  render() {
    return (
      <div>
        <h3 id="school-name">{this.props.currentSchool.name} Detail Page</h3>
        <Tab panes={panes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentSchool: state.data.currentSchool}
}


export default connect(mapStateToProps)(SchoolDetailPage);


