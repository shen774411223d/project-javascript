import React, { Component } from 'react';
import './index.css';


class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
  }

  mouseMove(e) {
    console.log(12);
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    const { x, y } = this.state;
    const child = this.props.render;
    return (
      <div className="warp" onMouseMove = { (e) => this.mouseMove(e) }>
        <p>鼠标坐标为 x: { x } y: { y } </p>
        { this.props.render(this.state) }
      </div>
    );
  }
}

export default Mouse;