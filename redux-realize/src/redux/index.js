import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './reducers'
import{ logger, thunk } from './middleware'


const Store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger, thunk)
)

export default Store