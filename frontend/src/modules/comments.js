import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const GET_COMMENTS = 'GET_COMMENTS';

export const getCommentsAction = createAction(GET_COMMENTS);

export const getComments = allPosts => async (dispatch) => {
  const payload = {};
  const promises = allPosts.reduce((acc, post) => {
    const comments = ApiService.findCommentsByPost(post.id);

    acc[post.id] = comments;

    return acc;
  }, {});

  Object.keys(promises).forEach(async (key) => {
    const postComments = await promises[key];
    payload[key] = postComments;
  });

  dispatch(getCommentsAction(payload));
};

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
