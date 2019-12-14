import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export default (WarpComponent) => {
  return class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slideShow: true
      }
      this.warp = document.createElement('div');
      this.warp.className = "portal-warp";
      this.rootRef = React.createRef();
    }
    
    componentDidMount() {
      document.body.appendChild(this.warp);
    }

    componentWillUnmount() {
      document.body.removeChild(this.warp);
      this.rootRef = null;
    }

    change(type) {
      this.setState({
        slideShow: false
      });
      this.rootRef.current.addEventListener('webkitAnimationEnd', () => {
        this.props.changeShow(false);
      });
      this.rootRef.current.addEventListener('animationEnd', () => {
        this.props.changeShow(false);
      });
    }

    r() {
      const contentName = this.props.show === this.state.slideShow? 'content-slide-up' : 'content-slide-bottom';
      const rootName = this.props.show === this.state.slideShow? 'root-slide-up' : 'root-slide-bottom';
      return (
        <div  className = { `portal-root ${rootName}` }>
          <div ref = { this.rootRef } className = { `portal-content ${contentName}` }>
            <WarpComponent { ...this.props } change = { (props) => this.change(props) }  />
          </div>
        </div>
      );
    }

    render() {
      
      return (
        ReactDOM.createPortal(
          this.r(),
          this.warp
        )
      );
    }
  }
}