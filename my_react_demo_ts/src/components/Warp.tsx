import React, {
  FC, 
  useContext,
  useReducer
} from 'react'
import '../App.css'

import { TestContext, defaultValue, reducers } from '../common/store'

const Warp: FC = function(props) {
  const [state, dispatch] = useReducer(reducers, defaultValue)
  function handleCount(): void {
    dispatch({type: 'CHANGE_COUNT', payload: state.count + 1})
  }
  return (
    <div className="view-block" style = {{borderColor: 'green'}}>
      <p>warp view</p>
      <button onClick = { handleCount }>change count with warp</button>
      <p>count: {state.count}</p>
      <TestContext.Provider value = {{ state, dispatch }}>
        <Child />
        <Admin />
      </TestContext.Provider>
    </div>
  )
}

const Child: FC = function(props) {
  const {state, dispatch} = useContext(TestContext)
  function handleCount(): void {
    dispatch({type: 'CHANGE_COUNT', payload: state.count + 1})
  }
  return (
    <div className="view-block">
      <p>child view</p>
      <button onClick = { handleCount }>change count with child</button>
      <p>count: {state.count}</p>
    </div>
  )
}

const Admin: FC = function(props) {
  const{state, dispatch} = useContext(TestContext)
  function renderAdmin(): JSX.Element[] {
    return Object.keys(state.admin).map((el: any) => {
      return <p key={el}>{el}: {state.admin[el]}</p>
    })
  }
  return (
    <div className="view-block">
      <p>i am admin</p>
      {renderAdmin()}
    </div>
  )
}

export default Warp