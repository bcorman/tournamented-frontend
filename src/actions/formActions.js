import { ADD_SCHOOL, INIT_TOUR, LOAD_SCHOOLS_BY_TOUR } from './types';
import { ROOT_URL } from '../config';
import axios from 'axios';

export function addSchool (newSchool, tournamentID) {
  const school = {
    name: newSchool
  }
  const id = tournamentID
  console.log(id)
  return function (dispatch) {
    axios.post(`${ROOT_URL}/setup/school/create`, {school, id})
      .then(function (response) {
        dispatch({ type: ADD_SCHOOL, school: response.data });
      })
      .catch(function(error) {
        throw(error);
      })
  }
}

export function loadSchoolsByTournament (tournamentID) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/setup/school/${tournamentID}`)
      .then(function (response) {
        console.log(response.data)
        dispatch({type: LOAD_SCHOOLS_BY_TOUR, schools: response.data});
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
        localStorage.setItem('tourData', JSON.stringify(response.data))
        dispatch({type: INIT_TOUR, payload: response.data});
      })
      .catch(function(error) {
        throw(error);
      })
  }
}
