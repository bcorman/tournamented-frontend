import { SET_CURRENT_SCHOOL } from './types';

export function setCurrentSchool (school) {
  return {
    type: SET_CURRENT_SCHOOL,
    school
  }
}