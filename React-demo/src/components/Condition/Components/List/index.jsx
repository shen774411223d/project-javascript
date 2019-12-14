import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  renderItems() {
    const { data, renderItem, key } = this.props;
    return data.map((element, idx) => {
      return renderItem(element, idx);
    })
  }
  render() {
    return (
      <div>
        { this.renderItems() }
      </div>
    );
  }
}

List.propTypes = {
  renderItem: PropTypes.element,
  key: PropTypes.func,
  data: PropTypes.array
};

export default List;