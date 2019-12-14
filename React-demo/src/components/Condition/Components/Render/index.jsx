import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Render extends Component {
  render() {
    return this.props.if? this.props.children : null;
  }
}

Render.propTypes = {
  if: PropTypes.bool
};

export default Render;