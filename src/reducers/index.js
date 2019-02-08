import { combineReducers } from 'redux';
import posts from './postsReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  posts,
  users,
});

export default rootReducer;
