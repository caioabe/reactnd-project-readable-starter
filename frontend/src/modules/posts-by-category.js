import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const FIND_POSTS_BY_CATEGORY = 'FIND_POSTS_BY_CATEGORY';
const CLEAR_POSTS_BY_CATEGORY = 'CLEAR_POSTS_BY_CATEGORY';

export const findPostsByCategoryAction = createAction(FIND_POSTS_BY_CATEGORY);
export const clearPostsByCategory = createAction(CLEAR_POSTS_BY_CATEGORY);

export const findPostsByCategory = categoryId => async (dispatch) => {
  const posts = await ApiService.findPostsByCategory(categoryId);

  dispatch(findPostsByCategoryAction(posts));
};

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FIND_POSTS_BY_CATEGORY:
      return [...action.payload];
    case CLEAR_POSTS_BY_CATEGORY:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
