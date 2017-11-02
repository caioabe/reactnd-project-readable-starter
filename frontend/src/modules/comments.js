import { createAction } from 'redux-actions';
import ApiService from '../services/api-service';

const FIND_COMMENTS_BY_POST = 'FIND_COMMENTS_BY_POST';
const VOTE_COMMENT = 'VOTE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

export const findCommentsByPostAction = createAction(FIND_COMMENTS_BY_POST);
export const voteOnCommentAction = createAction(VOTE_COMMENT);
export const deleteCommentAction = createAction(DELETE_COMMENT);

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
    default:
      return state;
  }
};

export default reducer;
