import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const GET_POSTS = 'GET_POSTS';

export const getPostsAction = createAction(GET_POSTS);

export const getPosts = () => async (dispatch) => {
  const posts = await ApiService.getPosts();

  dispatch(getPostsAction(posts));
};

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
