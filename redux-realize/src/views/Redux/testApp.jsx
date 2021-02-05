import React from 'react'
import {connect} from './store'

const addCount = function(payload) {
  return {
    type: 'ADD_COUNT',
    payload
  }
}

const setMsg = function(payload) {
  return {
    type: 'SET_MSG',
    payload
  }
}

const fetchData = (num) => {
  return (dispatch) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('ok')
        dispatch({
          type: 'ADD_COUNT',
          payload: num
        })
      }, 500)
    })
  }
}

class TestApp extends React.Component {
  constructor(props) {
    super(props)
  }
  
  handleCount = () => {
    this.props.addCount(456)
  }

  handleMsg = () => {
    this.props.setMsg('hello react!')
  }

  handleFetchData = () => {
    this.props.fetchData(9)
  }

  render() {
    console.log(this.props)
    const {count, copyMsg} = this.props
    return (
      <div>
        <h1 onClick={this.handleCount}>test app {count}</h1>
        <button onClick={this.handleMsg}>{copyMsg}</button>
        <button onClick={this.handleFetchData}>fetch data</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  count: store.count,
  copyMsg: store.msg
})

const mapDispatchToProps = {
  addCount,
  setMsg,
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApp)