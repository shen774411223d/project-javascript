import React, { Component } from 'react';

class Square extends Component {
  render() {
    const { x, y } = this.props.mouse;
    return (
      <div>
        <div style={{width: '100px', height: '100px',background: 'red',color: 'white', position: 'absolute', top: y - 50, left: x - 50}}></div>
      </div>
    );
  }
}

export default Square;