import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg } from '../../redux/actions'
import '../../App.css';

function App(props) {
  const { num, msg } = props

  function changeMsg() {
    props.fetchBaseMsg('fetch msg!').then(res => {
      console.log(123, res)
    })
  }

  function changenNum() {
    props.setBaseNum(props.num + 1)
  }

  return (
    <div className="App">
      hello!
      <p>num: {num}</p>
      <p>msg: {msg}</p>
      <div>
        <button onClick = { changeMsg }>change msg</button>
        <button onClick = { changenNum }>change num</button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state, ownProps) => {
  const{ num, msg } = state.base
  return { num, msg }
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
