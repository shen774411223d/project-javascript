
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { RECEIVE_USERS, RECEIVE_BOOKS } from '../ActionsType';

const lists = handleActions({
  [RECEIVE_USERS](state, action) {
    return { ...state, users: action.payload };
  },
  [RECEIVE_BOOKS](state, action) {
    return { ...state, books: action.payload };
  }
}, {});

export default combineReducers({
  lists
});