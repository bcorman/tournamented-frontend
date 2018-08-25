import { combineReducers } from 'redux';
import authReducer from './authReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: formReducer
});

export default rootReducer;
