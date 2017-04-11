import axios from 'axios';
import {FETCH_USERS, FETCH_POSTS, ERROR_FETCH} from './types';

const API_URL = 'http://jsonplaceholder.typicode.com';

//axios and redux-promise to process call
export function fetchUsers() {
  const request = axios.get(`${API_URL}/users`);

  return {
    type: FETCH_USERS,
    payload: request
  }
}

//axios and redux-thunk to process call
export function fetchAllPosts() {
  return function(dispatch) {
    axios.get(`${API_URL}/posts`)
      .then((response) => {
        dispatch({
          type: FETCH_POSTS,
          payload: response
        });
      }).catch((reason) => {
        dispatch({
          type: ERROR_FETCH,
          payload: reason
        });
      });
  }
}