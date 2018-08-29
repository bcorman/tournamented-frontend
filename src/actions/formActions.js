import { ADD_SCHOOL, INIT_TOUR, LOAD_SCHOOLS_BY_TOUR, ADD_STUDENT } from './types';
import { ROOT_URL } from '../config';
import axios from 'axios';

export function addSchool (newSchool, tournamentID) {
  const school = {
    name: newSchool
  }
  const id = tournamentID
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

// add student

export function addStudent (student, schoolID) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/setup/student/add`, {type: 'student', student, schoolID})
      .then(function (response) {
        dispatch({ type: ADD_STUDENT, student: response.data });
      })
      .catch(function(error) {
        throw(error);
      })
  }
}

// load all schools in selected tournament

export function loadSchoolsByTournament (tournamentID) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/setup/school/${tournamentID}`)
      .then(function (response) {
        console.log(response.data)
        localStorage.setItem('schools', JSON.stringify(response.data));
        dispatch({type: LOAD_SCHOOLS_BY_TOUR, schools: response.data});
      })
      .catch(function(error) {
        throw(error);
      })
  }
}

// load single school in selected tournament

// export function loadSchoolByTournament (tournamentID, schoolID) {
//   return function (dispatch) {
//     axios.get
//   }
// }

export function loadTournament (tournamentID) {
  return function () {
    axios.get(`${ROOT_URL}/${tournamentID}`)
    .then(function (response) {
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
