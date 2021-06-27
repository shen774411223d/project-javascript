import React from 'react'
import TestApp from './testApp'
import {createStore, Provider, applyMiddleware} from './store'
import {logger, logger2, thunk} from './middlewares'
import {reducer} from './reducer'

import {createElement, render} from './reactUtils'
const vnodes = createElement(
  'div',
  {style: {'border': '1px solid yellow'}},
  [
    createElement('button', {disabled: true}, '立即购买'),
    createElement('div', {style: {color: 'red'}}, '价格99'),
  ]
)
console.log(vnodes)
render(vnodes, document.body)

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