import React, { Component } from 'react';
import './index.css';
import description from '../Common/description.json';

class IndexRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIdx: 0
    }
  }

  setActive(payload) {
    this.setState({
      activeIdx: payload.id
    });
  }

  renderRouters() {
    const { routers } = this.props;
    return routers.map(el => {
      return (
        <li 
          key = { el.id } 
          onClick = { () => this.setActive(el) }
          className="index-route-routers-item">
          { el.name }
        </li>
      )
    })
  }
  
  render() {
    return (
      <div className="index-route-warp">
        <ul className="index-route-routers-warp">
          { this.renderRouters() }
        </ul> 
        <div className="index-route-content">
          <h2>一些组件的说明，浏览之前先看下这里的内容。左边可点击哦</h2>
          <hr />
          <div className="index-route-text">
            { description[this.state.activeIdx] }
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;