import { ADD_SCHOOL, INIT_TOUR } from './types';
import { ROOT_URL } from '../config';
import axios from 'axios';

export function addSchool (newSchool) {
  const school = {
    name: newSchool
  }
  return function (dispatch) {
    axios.post(`${ROOT_URL}/setup/school/create`, school)
      .then(function (response) {
        dispatch({ type: ADD_SCHOOL, school });
      })
      .catch(function(error) {
        throw(error);
      })
  }
}

export function initTournament (tourName, tourDate, tourLocation, tourLength, user) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/setup/init`, {tourName, tourDate, tourLocation, tourLength, user})
      .then(function (response) {
        dispatch({type: INIT_TOUR, payload: response.data});
      })
      .catch(function(error) {
        throw(error);
      })
  }
}
