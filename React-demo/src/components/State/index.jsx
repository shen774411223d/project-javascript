import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0
    }
  }

  componentDidMount() {
  }

  changeCount() {
    /* 
      本例子是说明 setState可以return一个函数 这样setState就是同步的了
    */
    this.setState((state, props) => { return { 
      count: this.state.count + 1
     }});
     this.setState((state, props) => { return { 
      count: this.state.count + 1
     }});
  }
  
  render() {
    return (
      <div>
        <h1>state</h1>
        <button onClick = { () => this.changeCount() }>{ this.state.count }</button>
      </div>
    );
  }
}

export default State;