import { ADD_SCHOOL } from '../actions/types';
const defaultData = {schools: ['BISNY', 'NEST']};

const formReducer = (state = defaultData, action) => {
  switch (action.type) {
  case ADD_SCHOOL:
    return { ...state,
      schools: [...state.schools, action.newSchool]
    };
  default:
    return state;
  }
};

export default formReducer;
