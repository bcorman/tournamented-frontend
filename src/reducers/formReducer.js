import { ADD_SCHOOL, INIT_TOUR, REMOVE_SCHOOL } from '../actions/types';
const defaultData = {
  schools: [
    {
      name: 'BISNY'
    }, {
      name: 'NEST'
    }
  ]
}

const formReducer = (state = defaultData, action) => {
  switch (action.type) {
  case INIT_TOUR:
    return {
      ...state,
      tourData: action.payload,
      tourLoaded: true
    }
  case ADD_SCHOOL:
    return {
      ...state,
      schools: [...state.schools, action.school]
    }
  case REMOVE_SCHOOL:
    return {
      ...state,
      schools: [...state.schools.filter(school => school.name !== action.school.name)]
    }
  default:
    return state;
  }
};

export default formReducer;
