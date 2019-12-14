import React, { Component } from 'react';
import RefChild from './RefChild';

class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpVal: ''
    }
    //要通过 React.createRef() 来创建ref
    this.child = React.createRef();
  }
  
  changeVal(e) {
    this.setState({
      inpVal: e.target.value
    });
  }

  setValByRef() {
    this.child.current.changeMsg(this.state.inpVal);
    console.log(this.child);
  }

  render() {
    return (
      <div>
        <input type="text" value = { this.state.inpVal } onChange = { (e) => this.changeVal(e) } />
        <div>
          <button onClick = { () => this.setValByRef() } >点我改变组件的值，通过ref</button> <br />
        </div>
        <RefChild ref = { this.child } />
      </div>
    );
  }
}

export default Refs;