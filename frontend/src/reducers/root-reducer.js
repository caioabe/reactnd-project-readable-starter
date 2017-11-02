import { combineReducers } from 'redux';
import postsReducer from '../modules/posts';
import categoriesReducer from '../modules/categories';
import commentsReducer from '../modules/comments';

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
});
