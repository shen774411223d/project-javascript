import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../index.css'
class ShowCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'react',
      childCount: 0,
      position: 0
    }
    this.box = React.createRef()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if(nextProps.count !== prevState.childCount) {
      return {
        childCount: nextProps.count
      }
    }
    return null;
  }

  componentDidMount() {
    this.timeFn = this.createAnimation()
    this.timeFn()
  }

  createAnimation() {
    let time = 0
    return () => {
      time += 5
      this.setState({
        position: time
      })
      if(time <= 500) {
        window.requestAnimationFrame(this.timeFn)
      }
    }
  }

  setCount() {
    this.setState({
      childCount: this.state.childCount +1
    });
  }

  render() {
    return (
      <div style = {{border: '1px solid red'}}>
        <div style={{transform: `translateX(${this.state.position}px)`}} className="box"></div>
        <h1>count: { this.props.count }</h1>
        <h1>childCount: { this.state.childCount }</h1>
        <button onClick = { () =>  this.setCount()}>taps child</button>
      </div>
    );
  }
}

ShowCount.propTypes = {
  count: PropTypes.number
};

export default ShowCount;