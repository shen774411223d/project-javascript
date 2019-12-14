import React, { Component } from 'react';
export default (WarpComponent) => {
  return class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInfo: ''
      }
      this.styles = {
        width: '100%',
        textAlign: 'left',
        color: 'red',
        paddingLeft: '30px'
      }
    }
    
    componentDidMount() {
      !localStorage.getItem('userInfo') && localStorage.setItem('userInfo', 'jack');
      this.setState({
        userInfo: localStorage.getItem('userInfo')
      });
    }

    back() {
      this.props.history.go(-1);
    }

    render() {
      return (
        <React.Fragment>
          <div style = { this.styles } onClick = { () => this.back() }>backTo</div>
          <WarpComponent userInfo = { this.state.userInfo } { ...this.props } />
        </React.Fragment>
      )
    }
  }
}