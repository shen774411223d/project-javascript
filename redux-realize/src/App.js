import React, { useEffect, useRef } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg } from './redux/actions'
import { Thunk, Life } from './views'
import './App.css';

const LINK = [
  {
    path: '/',
    name: 'thunk',
    isIndex: true
  },
  {
    path: '/life',
    name: 'life',
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
          <Route exact path="/life" component = { Life } />
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
