import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './formReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer
});

export default rootReducer;
