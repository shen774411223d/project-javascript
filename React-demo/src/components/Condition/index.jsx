import React, { Component } from 'react';
import Render from './Components/Render';
import List from './Components/List';

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: [
        {name: 'jack', sex: 'male', age: 20, id: 0},
        {name: 'tom', sex: 'female', age: 18, id: 1},
        {name: 'rose', sex: 'male', age: 40, id: 2},
      ]
    }
  }

  item(element, key) {
    return (
      <div key = { key }>{element.name}</div>
    )
  }
  
  render() {
    return (
      <div>
        <span>hello</span>
        <Render if = { this.state.show }>
          <div>hello</div>
        </Render>
        <List data = { this.state.list } renderItem = { (element, key) => this.item(element, key) } />
      </div>
    );
  }
}

export default Condition;