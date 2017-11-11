import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const GET_POSTS = 'GET_POSTS';
const VOTE_POST = 'VOTE_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';
const CREATE_POST = 'CREATE_POST';

export const getPostsAction = createAction(GET_POSTS);
export const voteOnPostAction = createAction(VOTE_POST);
export const deletePostAction = createAction(DELETE_POST);
export const updatePostAction = createAction(UPDATE_POST);
export const createPostAction = createAction(CREATE_POST);

export const getPosts = () => async (dispatch) => {
  const posts = await ApiService.getPosts();

  dispatch(getPostsAction(posts));
};

export const voteOnPost = (postId, isUpVote) => async (dispatch) => {
  await ApiService.voteOnPost(postId, isUpVote);

  dispatch(voteOnPostAction({ postId, isUpVote }));
};

export const deletePost = postId => async (dispatch) => {
  await ApiService.deletePost(postId);

  dispatch(deletePostAction(postId));
};

export const updatePost = post => async (dispatch) => {
  await ApiService.updatePost(post);

  dispatch(updatePostAction(post));
};

export const createPost = post => async (dispatch) => {
  await ApiService.createPost(post);

  dispatch(createPostAction(post));
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
    case UPDATE_POST: {
      const post = action.payload;

      return [...state.filter(p => p.id !== post.id), { ...post }];
    }
    case CREATE_POST: {
      return [...state];
    }
    default:
      return state;
  }
};

export default reducer;
