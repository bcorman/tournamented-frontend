import { ADD_SCHOOL } from './types';

export function addSchool (newSchool) {
  return {
    type: ADD_SCHOOL,
    newSchool
  };
}