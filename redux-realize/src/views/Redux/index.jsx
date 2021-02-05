import React from 'react'
import TestApp from './testApp'
import {createStore, Provider, applyMiddleware} from './store'
import {logger, logger2, thunk} from './middlewares'
import {reducer} from './reducer'
const initState = {
  count: 0,
  msg: 'hello word!'
}

const Store = createStore(
  reducer, 
  initState,
  applyMiddleware(thunk, logger, logger2)
)
const Reduxer = () => {
  return (
    <div>
      <header>reduxer</header>
      <Provider store={Store}>
        <TestApp />
      </Provider>
    </div>
  )
}

export default Reduxer