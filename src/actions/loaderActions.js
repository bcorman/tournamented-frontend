import { SET_CURRENT_SCHOOL } from './types';

export const setCurrentSchool = (school) => {
  console.log('set current school action')
  console.log(school)
  return {
    type: SET_CURRENT_SCHOOL,
    school: school
  }
}