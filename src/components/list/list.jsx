import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };
  }

  render() {
    const { items } =  this.state;

    const listItems = items.map((item) =>
    <li>{item.title}</li>
  );

    return (
        <ul>{listItems}</ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default List;
