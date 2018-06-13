import React, { Component } from 'react';
import Input from './elements/Input';
import Button from './elements/Button';
import { connect } from 'react-redux';
import { add, change } from '../actions/pageActions';

class CreateTodo extends Component {
  change = e => {
    this.props.change(e.target.value);
  };

  add = () => {
    this.props.add(this.props.state.inputValue);
    this.props.change('');
  };

  render() {
    return (
      <div className="create-todo">
        <Input
          type="text"
          value={this.props.state.inputValue}
          changeHandler={this.change}
        />
        <Button className="add" text="Add" clickHandler={this.add} />
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state.inputState
  }),
  { add, change }
)(CreateTodo);
