import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        value={this.props.value}
        autoFocus={this.props.autoFocus}
        onChange={this.props.changeHandler}
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  autoFocus: PropTypes.bool,
  changeHandler: PropTypes.func
};

export default Input;
