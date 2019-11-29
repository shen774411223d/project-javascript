import React, { useEffect, useRef } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg } from './redux/actions'
import { Thunk, Life, Contexter } from './views'
import './App.css';
const LINK = [
  {
    path: '/',
    name: 'Thunk',
    isIndex: true
  },
  {
    path: '/life',
    name: 'Life',
    isIndex: false
  },
  {
    path: '/contexter',
    name: 'Contexter',
    isIndex: false
  }
]    

function App(props) {

  function navLink() {
    return LINK.map(({ path, name }) => {
      return <Link className="nav-bar" key = { name } to = { path }>{ name }</Link>
    })
  }

  return (
    <div className="App">
      hello!
      <div className="view-block">
        <div className="nav-block">{navLink()}</div>
        <Switch>
          <Route exact path="/" component = { Thunk } />
          <Route  path="/life" component = { Life } />
          <Route path="/contexter" component = { Contexter } />
        </Switch>
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
