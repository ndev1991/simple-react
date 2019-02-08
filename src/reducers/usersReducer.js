import {FETCH_USERS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function usersReducer(state = initialState.users, action) {
  let newState;

  switch (action.type) {
    case FETCH_USERS:
      newState = objectAssign({}, state);
      newState.persons = action.persons;
      return newState;
    default:
      return state;
  }
}
