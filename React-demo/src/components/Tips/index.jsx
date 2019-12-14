import React, { Component } from 'react';
import Pop from './components/Pop';
import './index.css';

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popShow: false
    }
  }

  changeShow(type = true) {
    console.log(type);
    this.setState({
      popShow: type
    });
  }
  
  render() {
    const { popShow } = this.state;
    return (
      <div>
        <div className="tips-btn" onClick = { () => this.changeShow() }>
          点我触发Pop
        </div>
        { popShow && <Pop show = { this.state.popShow } changeShow = { (type) => this.changeShow(type) } /> }
      </div>
    );
  }
}

export default Tips;