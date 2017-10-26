import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategoriesAction = createAction(GET_CATEGORIES);

export const getCategories = () => async (dispatch) => {
  const categories = await ApiService.getCategories();

  dispatch(getCategoriesAction(categories));
};

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
