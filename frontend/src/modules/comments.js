import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const FIND_COMMENTS_BY_POST = 'FIND_COMMENTS_BY_POST';
const VOTE_COMMENT = 'VOTE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const CREATE_COMMENT = 'CREATE_COMMENT';
const FIND_COMMENT = 'FIND_COMMENT';

export const findCommentsByPostAction = createAction(FIND_COMMENTS_BY_POST);
export const voteOnCommentAction = createAction(VOTE_COMMENT);
export const deleteCommentAction = createAction(DELETE_COMMENT);
export const updateCommentAction = createAction(UPDATE_COMMENT);
export const createCommentAction = createAction(CREATE_COMMENT);
export const findCommentAction = createAction(FIND_COMMENT);

export const findCommentsByPost = postId => async (dispatch) => {
  const commentsByPost = await ApiService.findCommentsByPost(postId);

  dispatch(findCommentsByPostAction({ commentsByPost, postId }));
};

export const voteOnComment = (commentId, postId, isUpVote) => async (dispatch) => {
  await ApiService.voteOnComment(commentId, isUpVote);

  dispatch(voteOnCommentAction({ commentId, postId, isUpVote }));
};

export const deleteComment = (commentId, postId) => async (dispatch) => {
  await ApiService.deleteComment(commentId);

  dispatch(deleteCommentAction({ commentId, postId }));
};

export const updateComment = comment => async (dispatch) => {
  await ApiService.updateComment(comment);

  dispatch(updateCommentAction(comment));
};

export const createComment = comment => async (dispatch) => {
  await ApiService.createComment(comment);

  dispatch(createCommentAction(comment));
};

export const findComment = commentId => async (dispatch) => {
  const comment = await ApiService.findComment(commentId);

  dispatch(findCommentAction(comment));
};

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FIND_COMMENTS_BY_POST: {
      const newState = { ...state };

      newState[action.payload.postId] = action.payload.commentsByPost;

      return newState;
    }
    case VOTE_COMMENT: {
      const newState = { ...state };
      const { commentId, postId, isUpVote } = action.payload;

      newState[postId].forEach((comment) => {
        if (comment.id === commentId) {
          comment.voteScore = isUpVote ? comment.voteScore + 1 : comment.voteScore - 1;
        }
      });

      return newState;
    }
    case DELETE_COMMENT: {
      const newState = { ...state };
      const { commentId, postId } = action.payload;

      newState[postId] = newState[postId].filter(c => c.id !== commentId);

      return newState;
    }
    case UPDATE_COMMENT: {
      const newComment = action.payload;
      const { parentId } = newComment;

      state[parentId] = state[parentId] || [];
      state[parentId].forEach((comment, index) => {
        if (comment.id === newComment.id) {
          state[parentId][index] = newComment;
        }
      });

      return { ...state };
    }
    case CREATE_COMMENT: {
      return { ...state };
    }
    case FIND_COMMENT: {
      const newState = { ...state };
      const newComment = action.payload;
      const { parentId } = newComment;

      newState[parentId] = newState[parentId] || [];
      newState[parentId].push(newComment);

      return { ...newState };
    }
    default:
      return state;
  }
};

export default reducer;
