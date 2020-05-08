import React, { Component } from 'react';
import { 
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import { Ball, RenderProps, State, Routes, Refs, High, Tips, Reduxer, IndexRoute, Condition, Props, RenderChild } from './components';
import logo from './logo.svg';
import './App.css';
console.log(process.env.DOMAIN_BASE);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 60,
      routers: [
        {name: 'state', path: '/state', id: 0},
        {name: 'practise', path: '/practise', id: 1},
        {name: 'ball', path: '/ball', id: 2},
        {name: 'routes', path: '/routes', id: 3},
        {name: 'refs', path: '/refs', id: 4},
        {name: 'high', path: '/high', id: 6},
        {name: 'tips', path: '/tips', id: 7},
        {name: 'reduxer', path: '/reduxer', id: 8},
        {name: 'condition', path: '/condition', id: 9},
        {name: 'props', path: '/props', id: 10},
        {name: 'renderChild', path: '/render-child', id: 11},
      ]
    }
    this.inp = React.createRef();
  }

  enter(e) {
    if(e.keyCode !== 13) return;
    this.setState({
      count: Number(this.inp.current.value)
    });
  }

  renderRouters() {
    return this.state.routers.map(el => {
      return (
        <li key={ el.id } className="li-route">
          <Link to={ el.path }>{ el.name }</Link>
        </li>
      )
    });
  }

  renderBall(props) {
    return (
      <div>
        <input defaultValue = { this.state.count } ref={ this.inp } onKeyUp = { (e) => this.enter(e) } />
        <Ball { ...props } count = { this.state.count } />
      </div>
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="routes-warp">
            { this.renderRouters() }
          </ul>
        </header>
        <Switch>
          <Route path="/" exact render = { props => <IndexRoute { ...props } routers = { this.state.routers } /> } />
          <Route path="/state" component = { State }  />
          <Route path="/practise" component = { RenderProps } />
          <Route path="/ball" render = { props => this.renderBall(props) } />
          <Route path="/routes" component = { Routes } />
          <Route path="/refs" component = { Refs } />
          <Route path="/high" component = { High } />
          <Route path="/tips" component = { Tips } />
          <Route path="/reduxer" component = { Reduxer } />
          <Route path="/condition" component = { Condition } />
          <Route path="/props" component = { Props } />
          <Route path="/render-child" component = { RenderChild } />
          <Redirect to="/" />
          {/* 
            Redirect 重定向 
            @param {string} from 当输入制定链接时会触发
            @param {string} to 当触发时跳转到哪里
            配合Switch 当输入无效路径时会跳到指定页面
          */}
        </Switch>
      </div>
    );
  }
}

export default App;
