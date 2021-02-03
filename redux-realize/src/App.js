import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg, testMsg } from './redux/actions'
import { Thunk, Life, Contexter, Curry, Data, Reduxer } from './views'
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
  },
  {
    path: '/curry',
    name: 'Curry',
    isIndex: false
  },
  {
    path: '/data',
    name: 'Data',
    isIndex: false
  },
  {
    path: '/reduxer',
    name: 'Reduxer',
    isIndex: false
  }
]    

function App(props) {

  function navLink() {
    return LINK.map(({ path, name }) => {
      return <Link className="nav-bar" key = { name } to = { path }>{ name }</Link>
    })
  }

  const handleActions = () => {
    props.testMsg()
    props.testMsg()
  }

  return (
    <div className="App">
      hello!
      <button onClick={handleActions}>change actions</button>
      <div className="view-block">
        <div className="nav-block">{navLink()}</div>
        <Switch>
          <Route exact path="/">
            <Thunk />
          </Route>
          <Route  path="/life">
            <Life />
          </Route>
          <Route exact path="/contexter">
            <Contexter index="1" />
          </Route>
          <Route exact path="/contexter/:id">
            <Contexter index="2" />
          </Route>
          <Route exact path="/curry">
            <Curry />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
          <Route exact path="/reduxer">
            <Reduxer />
          </Route>
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
  fetchBaseMsg,
  testMsg
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
  )(App)
