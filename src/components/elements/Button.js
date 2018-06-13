import React, {Component} from 'react';

class Button extends Component {
  render(){
    return (
      <button onClick={this.props.clickHandler} className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
