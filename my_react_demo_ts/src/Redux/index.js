import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { values } from 'ramda'
import * as epics from './epics'
import * as reducers from './reducers'
const rootEpci = combineEpics(
  // epics
  ...values({...epics})
)

const epicMiddleware = createEpicMiddleware()

const rootReducer = combineReducers(reducers)
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(epicMiddleware)))
export default Store
epicMiddleware.run(rootEpci)
