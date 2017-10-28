import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';
import { getComments } from './comments';

const GET_POSTS = 'GET_POSTS';
const VOTE_POST = 'VOTE_POST';
const DELETE_POST = 'DELETE_POST';

export const getPostsAction = createAction(GET_POSTS);
export const voteOnPostAction = createAction(VOTE_POST);
export const deletePostAction = createAction(DELETE_POST);

export const getPosts = () => async (dispatch) => {
  const posts = await ApiService.getPosts();

  dispatch(getPostsAction(posts));
  dispatch(getComments(posts));
};

export const voteOnPost = (postId, isUpVote) => async (dispatch) => {
  await ApiService.voteOnPost(postId, isUpVote);

  dispatch(voteOnPostAction({ postId, isUpVote }));
};

export const deletePost = postId => async (dispatch) => {
  await ApiService.deletePost(postId);

  dispatch(deletePostAction(postId));
};

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    case VOTE_POST: {
      const result = [...state];
      const { postId, isUpVote } = action.payload;

      result.forEach((post) => {
        if (post.id === postId) {
          post.voteScore = isUpVote ? post.voteScore + 1 : post.voteScore - 1;
        }
      });

      return [...result];
    }
    case DELETE_POST: {
      return [...state.filter(p => p.id !== action.payload)];
    }
    default:
      return state;
  }
};

export default reducer;
