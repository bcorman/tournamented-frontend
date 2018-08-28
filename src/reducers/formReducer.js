import { ADD_SCHOOL, INIT_TOUR, REMOVE_SCHOOL, LOAD_SCHOOLS_BY_TOUR, SET_CURRENT_SCHOOL } from '../actions/types';

const defaultData = {
  schools: [
    {
      name: 'BISNY'
    }, {
      name: 'NEST'
    }
  ],
  currentSchool: { name: 'BISNY' }
}

const dataReducer = (state = defaultData, action) => {
  switch (action.type) {
  case INIT_TOUR:
    return {
      ...state,
      tourData: action.payload,
      tourLoaded: true
    }
  case LOAD_SCHOOLS_BY_TOUR:
    return {
      ...state,
      schools: action.schools
    }
  case SET_CURRENT_SCHOOL:
    console.log('set current school reducer')
    console.log(action)
    return {
      ...state,
      currentSchool: action.school
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

export default dataReducer;
