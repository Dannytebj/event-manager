import axios from 'axios';
import setAuthHeader from '../utils/setAuthHeader';
import {
  AUTH_FORM_INPUTS,
  SET_VALIDATION_ERRORS,
  RESET_AUTH_STORE
} from './types';

const baseUrl = 'http://localhost:3000';

export const authFormInputs = ({ prop, value }) => {
  return {
    type: AUTH_FORM_INPUTS,
    payload: { prop, value }
  }
}

export const resetAuthStore = () => {
  return {
    type: RESET_AUTH_STORE
  }
}
export const setValidationError = (errors) => {
  return {
    type: SET_VALIDATION_ERRORS,
    payload: errors
  }
}

export function signUp(userData) {
  return dispatch => {
    return axios.post(`${baseUrl}/api/v1/users/register`, userData);
  }
}
export function signIn(userData) {
  return dispatch => {
    return axios.post(`${baseUrl}/api/v1/users/login`, userData)
      .then(response => {
        localStorage.setItem('jwtoken', response.data.token);
        setAuthHeader(response.data.token);
      })
      .catch(error => {
        // setValidationError(error);
      })
  }
}
