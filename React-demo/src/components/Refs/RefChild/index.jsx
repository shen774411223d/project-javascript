import React, { Component } from 'react';
import './index.css';

class RefChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'ref里的msg'
    }
  }

  changeMsg(value = '') {
    this.setState({
      msg: value
    });
  }
  
  render() {
    return (
      <div className="ref-child-warp">
        { this.state.msg }
      </div>
    );
  }
}

export default RefChild;