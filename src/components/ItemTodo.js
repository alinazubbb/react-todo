import React, { Component } from 'react';
import Input from './elements/Input';
import Button from './elements/Button';
import { connect } from 'react-redux';
import { save, remove } from '../actions/pageActions';

class ItemTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.text,
      edit: false
    };
  }

  remove = () => {
    this.props.remove(this.props.id);
  };

  save = e => {
    this.setState({
      edit: false
    });
    this.props.save(this.props.id, this.state.inputValue);
  };

  editHandler = e => {
    this.setState({
      edit: true
    });
  };

  changeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <li className="item-todo">
          <Input type="checkbox" changeHandler={this.doneChangeHandler} />
          {this.state.edit ? (
            <span>
              <Input
                value={this.state.inputValue}
                changeHandler={this.changeHandler}
                autoFocus={true}
                className="input-text"
                type="text"
              />
              <Button className="save" text="save" clickHandler={this.save} />
            </span>
          ) : (
            <span>
              <span className="item-text" onClick={this.editHandler}>
                {this.props.text}
              </span>
              <Button
                className="remove"
                text="remove"
                clickHandler={this.remove}
              />
            </span>
          )}
        </li>
      </div>
    );
  }
}

export default connect( null, { save, remove } )(ItemTodo);
