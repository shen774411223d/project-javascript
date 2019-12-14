import React, { Component } from 'react';

class Other extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        other
      </div>
    );
  }
}

export default Other;