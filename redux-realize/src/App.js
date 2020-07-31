import React, { useEffect, useRef } from 'react';
import { Switch, Route, Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { setBaseMsg, setBaseNum, fetchBaseMsg, testMsg } from './redux/actions'
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
  console.log(props, 'app props')
  // const match = useRouteMatch('/')
  const history = useHistory()
  const location = useLocation()
  console.log(history, location, 'match')
  const fetchData = async () => {
    try {
      throw 'error'
      // return {
      //   name: 'jack'
      // }
    }catch(e) {
      return {
        err: 'message'
      }
    }
  }
  useEffect(() => {
    async function fetcher() {
      const data = await fetchData()
      console.log(data, 'fetch data')
    }
    fetcher()
  }, [])

  function navLink() {
    return LINK.map(({ path, name }) => {
      return <Link className="nav-bar" key = { name } to = { path }>{ name }</Link>
    })
  }

  const handleActions = () => {
    props.testMsg()
    props.testMsg()
  }

  console.log(props.num, props.msg, 'num msg')
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
