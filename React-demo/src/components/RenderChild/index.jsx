import React, { Component } from 'react'


class Child extends Component {
  constructor(props) {
    super(props)
 
  }
  render() {
    return this.props.children
  }
}

class RenderChild extends Component {
  render() {
    return (
      <div>
        1
        <Child>
          <div>2</div>
          <div>3</div>
        </Child>
      </div>
    )
  }
}


export default RenderChild