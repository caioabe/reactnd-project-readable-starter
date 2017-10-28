import { combineReducers } from 'redux';
import postsReducer from '../modules/posts';
import categoriesReducer from '../modules/categories';
import postsByCategoryReducer from '../modules/posts-by-category';
import commentsReducer from '../modules/comments';

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  postsByCategory: postsByCategoryReducer,
  comments: commentsReducer,
});
