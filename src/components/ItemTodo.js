import React, { Component } from 'react';
import Input from './elements/Input';
import Button from './elements/Button';

class ItemTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      done: false,
      edit: false
    };
    this.doneChangeHandler = this.doneChangeHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  doneChangeHandler(e) {
    this.setState({ done: !this.state.done });
  }

  textChangeHandler(e) {
    this.setState({ text: e.target.value });
  }

  editHandler(e) {
    this.setState({ edit: !this.state.edit });
  }

  saveHandler(e) {
    this.setState({ edit: false });
    this.props.save(this.props.index, this.state.text);
  }

  removeHandler() {
    this.props.remove(this.props.index);
  }

  render() {
    const viewContent = (
      <span>
        <span className="item-text" onClick={this.editHandler}>
          {this.state.text}
        </span>
        <Button
          className="remove"
          text="remove"
          clickHandler={this.removeHandler}
        />
      </span>
    );
    const editContent = (
      <span>
        <Input
          autoFocus={true}
          className="input-text"
          type="text"
          value={this.state.text}
          changeHandler={this.textChangeHandler}
        />
        <Button className="save" text="save" clickHandler={this.saveHandler} />
      </span>
    );

    return (
      <li className="item-todo">
        <Input type="checkbox" changeHandler={this.doneChangeHandler} />
        {this.state.edit ? editContent : viewContent}
      </li>
    );
  }
}

export default ItemTodo;
