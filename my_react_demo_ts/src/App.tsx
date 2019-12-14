import React, { useEffect } from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import { setCount } from './Redux/actions'
import './App.css'
import Warp from './components/Warp'

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(ownProps)
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  setCount: setCount.request
}

type Props = ReturnType <typeof mapStateToProps> & typeof mapDispatchToProps

const App: React.FC<Props> = function(props: any) {
  
  const { count } = props

  function handleAdd() {
    console.log(typeof mapStateToProps)
  }

  return (
    <div className="App">
      <p>count: {count}</p>
      <div>
        <button onClick = { handleAdd }>add</button>
        <button>min</button>
        <Warp />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
