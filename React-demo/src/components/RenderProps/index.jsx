import React, { Component } from 'react';
import Mouse from './components/Mouse';
import Square from './components/Square';

class RenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderSquare(mouse) {
    return <Square mouse = { mouse } />
  }

  render() {
    return (
      <div>
        <h1>Practise</h1>
        <Mouse render = { mouse => this.renderSquare(mouse) } />
      </div>
    )
  }
}

export default RenderProps;