import React, { Component } from 'react';
import HighPortal from './HighPortal.js';
import '../index.css';

class Pop extends Component {

  change() {
    this.props.change(true);
  }

  render() {
    return (
      <div>
        <div className="pop-title">
          提示框
        </div>
        <div className="pop-content">

        </div>
        <div className="pop-tap">
          <div className="pop-tap-cancel" onClick = { () => this.change() }>取消</div>
          <div className="pop-tap-comfirm" onClick = { () => this.change() }>确认</div>
        </div>
      </div>
    );
  }
}

export default HighPortal(Pop);
