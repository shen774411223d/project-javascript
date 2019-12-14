import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Reducers from '../Reducers';
const defaultvalue = {
  lists: {
    users: [],
    books: []
  }
}
/* 
  applyMiddleware 添加中间价
  thunkMiddleware 可以在Actions里return一个函数 支持在Actions里 dispatch
*/
let store = createStore(
  Reducers, 
  defaultvalue,
  applyMiddleware(thunkMiddleware));
export default store;