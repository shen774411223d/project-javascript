
import Axios from 'axios';
import { createAction } from 'redux-actions';
import { RECEIVE_USERS, RECEIVE_BOOKS } from '../ActionsType';

export const receiveUsers = createAction(RECEIVE_USERS);
export const receiveBooks = createAction(RECEIVE_BOOKS);

/* 
  使用Redux 来请求数据
*/
export const getUsers = (payload) => {
  return async (dispatch) => {
    const result = await Axios.post('/api/getUsers', payload);
    dispatch(receiveUsers(result.data.users));
  }
}

export const getBooks = (id) => {
  return async (dispatch) => {
    const result = await Axios.get(`/api/getuserBooks?id=${ id }`);
    dispatch(receiveBooks(result.data.books));
  }
}
