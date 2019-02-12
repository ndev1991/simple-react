import { FETCH_POSTS, CHANGE_SEARCH_KEYWORD } from '../constants/actionTypes';
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
      newState.filteredPosts = action.posts.filter(post => 
        post.title.includes(newState.filterKeyword)
        || post.body.includes(newState.filterKeyword));
      return newState;
    case CHANGE_SEARCH_KEYWORD:
      newState = objectAssign({}, state);
      newState.filterKeyword = action.keyword;
      newState.filteredPosts = newState.posts.filter(post => 
        post.title.includes(newState.filterKeyword)
        || post.body.includes(newState.filterKeyword));
      return newState;
    default:
      return state;
  }
}
