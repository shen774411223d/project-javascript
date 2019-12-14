import React, { Component } from 'react';
import ShowCount from './Components/ShowCount'
class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleChange() {
    this.setState({
      count: ++this.state.count
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    return null
  }

  componentDidMount() {
  }

  
  render() {
    const { count } = this.state
    return (
      <div>
        <button onClick = { () => this.handleChange() }>taps</button>
        <ShowCount count = { count } />
      </div>
    );
  }
}

export default Props;