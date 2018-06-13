import React, { Component } from 'react'; 

class Input extends Component {
  render(){
    return (
      <input
        value={this.props.value}
        onChange={this.props.changeHandler}
        autoFocus={this.props.autoFocus}
        className={this.props.className}
        type={this.props.type}
      />
    );
  }
}

export default Input;
