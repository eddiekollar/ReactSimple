import { FETCH_USERS, FETCH_POSTS, ERROR_FETCH } from '../actions/types';

const INITIAL_STATE = { users: [], posts: [], error: {}};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload.data}
    case FETCH_POSTS:
      return { ...state, posts: action.payload.data};
    case ERROR_FETCH:
      return { ...state, instagramData: action.payload};
    default:
      return state;
  }
};