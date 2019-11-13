import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg } from './redux/actions'
import './App.css';

function App(props) {


  return (
    <div className="App">
      hello!
     
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
