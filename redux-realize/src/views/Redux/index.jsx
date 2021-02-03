import React from 'react'
import TestApp from './testApp'
import {createStore, Provider} from './store'
import {reducer} from './reducer'
const initState = {
  count: 0,
  msg: 'hello word!'
}

const Store = createStore(reducer, initState)


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