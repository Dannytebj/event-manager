import axios from 'axios';

export function signUp(userData) {
  return dispatch => {
    return axios.post('api/v1/users/register', userData);
  }
}
export function signIn(userData) {
  return dispatch => {
    return axios.post('api/v1/users/signIn', userData);
  }
}