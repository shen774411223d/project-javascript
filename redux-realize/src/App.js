import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg } from './redux/actions'
import './App.css';

function App(props) {
  const { num, msg } = props

  function handle(type, value) {
    props[type](value)
  }

  function handleFetch() {
    props.fetchBaseMsg('fetch msg!').then(res => {
      console.log(123, res)
    })
  }

  return (
    <div className="App">
      hello!
      <p onClick={() => handle('setBaseNum', 1)}>num: { num }</p>
      <p onClick={() => handle('setBaseMsg', 'updated!')}>msg: { msg }</p>
      <button onClick = { handleFetch }>fetch msg</button>
      <button onClick = { handleClear }>clear root</button>
    </div>
  );
}

const mapStatetoProps = (state, ownProps) => {
  const { msg, num } = state.base
  return { msg, num }
}

const mapDispatchToProps = {
  setBaseMsg,
  setBaseNum,
  fetchBaseMsg
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
  )(App)
