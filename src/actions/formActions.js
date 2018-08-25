import { ADD_SCHOOL } from './types';
import { ROOT_URL } from '../config';
import axios from 'axios';

export function addSchool (newSchool) {
  return {
    type: ADD_SCHOOL,
    newSchool
  };
}

export function initTournament (tourName, tourDate, tourLocation, tourLength, user) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/setup/init`, {tourName, tourDate, tourLocation, tourLength, user})
      .then(function (response) {
        console.log(response);
      });
  }
}
