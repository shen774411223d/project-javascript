import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: 0
    }
  }

  componentDidMount() {
    console.log(this.props);
    const { match: { params }, location: { state } } = this.props;
    this.setState({
      name: state.name,
      id: params.id
    });
  }
  
  render() {
    return (
      <div>
        <h2>id: { this.state.id }</h2>
        <h2>name: { this.state.name }</h2>
      </div>
    );
  }
}

export default Auth;