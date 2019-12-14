import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import User from './components/User';
import Other from './components/Other'
import './index.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.auth = React.createRef();  //给组件加ref可以获取组件的实例
    this.user = React.createRef();
    this.state = {
      routes: [
        {name: 'user', path: '/user', id: 0},
        {name: 'auth', path: '/auth', id: 1},
        {name: 'other', path: '/other', id: 2}
      ]
    }
  }

  componentDidMount() {
  }

  choose(element) {
    const { history, match } = this.props;
    const url = `${match.path}${element.path}/${element.id}`;
    /* 
      history.push 可以传递两种 state和query
      query传递的参数页面刷新会消失 而state不会
      参数会储存在location里
      路径后面的参数会储存在match里
    */

    /* 
      - location和match的区别
            - location是描述地址栏的变化，地址栏的位置和参数。location为你展示了当前页面从哪儿来，到哪里去，以及现在是什么状态。
            - match是指 <Route path> 与 URL 匹配的信息；match 是当前组件的路由信息；描述了该组件的一些路由情况
            - eg：Route的path为：/test  跳转路径为/test/16；  此时location里的信息是/test/16，而match则是/test
    */
    history.push({pathname: url, state: {name: element.name}});
  }

  renderRouteList() {
    return this.state.routes.map(el => {
      return (
        <li className="route-item" key={ el.id } onClick = {() => this.choose(el) }>
          { el.name }
        </li>
      )
    });
  }
  
  render() {
    const { match } = this.props;
    return (
      <div className="warp">
        <ul className="routes-warp">
          { this.renderRouteList() }
        </ul>
        <div className="routes-item">
          <Switch>
            <Route path={ `${match.path}/user/:id` } render={ props => <User { ...props } /> } />
            <Route path={ `${match.path}/auth/:id` } render={ props => <Auth { ...props } /> } />
            <Route path={ `${match.path}/other` } render={ props => <Other { ...props } /> } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;