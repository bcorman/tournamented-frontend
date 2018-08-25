import { combineReducers } from 'redux';
import authReducer from './authReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  formData: formReducer
});

export default rootReducer;
