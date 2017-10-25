import { combineReducers } from 'redux';

const INITIAL_STATE = [];

function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PIMBAPUMBA':
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}

export default combineReducers({
  posts,
});
