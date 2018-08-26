import { ADD_SCHOOL, INIT_TOUR, REMOVE_SCHOOL, LOAD_SCHOOLS_BY_TOUR } from '../actions/types';
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
  case LOAD_SCHOOLS_BY_TOUR:
    console.log(action)
    return {
      ...state,
      schools: action.schools
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
