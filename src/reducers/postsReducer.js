import {FETCH_POSTS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function postsReducer(state = initialState.posts, action) {
  let newState;

  switch (action.type) {
    case FETCH_POSTS:
      newState = objectAssign({}, state);
      newState.posts = action.posts;
      return newState;
    default:
      return state;
  }
}
