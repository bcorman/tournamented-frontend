import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR } from './types'
let URL = 'http://localhost:3090'

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signUpUser(email, password, passwordConfirmation ) {

  return function (dispatch) {
    axios.post(`${URL}/signup`, {email, password, passwordConfirmation })
      .then(response => {
        let user = response.data.user
        dispatch({ type: AUTH_USER, payload: user })
        localStorage.setItem('token', response.data.token)
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}

export function signInUser(email, password) {
  return function (dispatch) {
    // submit email and password to server
    const request = axios.post(`${URL}/signin`, {email, password})
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)
        let user = response.data.user

        // -if request is good, we need to update state to indicate user is authenticated
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({ type: AUTH_USER, payload: user})
      })
      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })
  }
}

export function signOutUser() {
  localStorage.removeItem('token', 'user')
  return {
    type: UNAUTH_USER
  }
}
