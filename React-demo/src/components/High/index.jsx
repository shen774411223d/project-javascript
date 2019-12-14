import React, { Component } from 'react';
import HightComponent from './HightComponent.js';

class High extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div>
        这是获取到的userInfo: <h1>{ this.props.userInfo }</h1>
      </div>
    );
  }
}

export default HightComponent(High);