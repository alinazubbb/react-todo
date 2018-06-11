import React, { Component } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ inputValue: e.target.value });
  }

  addHandler() {
    this.props.add(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <div className="create-todo">
        <Input
          type="text"
          value={this.state.inputValue}
          changeHandler={this.changeHandler}
        />
        <Button className="add" text="Add" clickHandler={this.addHandler} />
      </div>
    );
  }
}

export default CreateTodo;
