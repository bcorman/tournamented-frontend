import { ADD_SCHOOL, INIT_TOUR } from '../actions/types';
const defaultData = {schools: ['BISNY', 'NEST']};

const formReducer = (state = defaultData, action) => {
  switch (action.type) {
  case INIT_TOUR:
    return {
      ...state,
      tourConfig: action.payload
    };
  case ADD_SCHOOL:
    return {
      ...state,
      schools: [...state.schools, action.newSchool]
    };
  default:
    return state;
  }
};

export default formReducer;
