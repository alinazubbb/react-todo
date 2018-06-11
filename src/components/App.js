import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';
import list from '../todos.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    };
    this.add = this.add.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(inputValue) {
    this.setState({
      list: this.state.list.concat([
        {
          id: new Date().getTime(),
          text: inputValue
        }
      ])
    });
  }

  save(index, text) {
    const arr = this.state.list.slice();
    arr[index].text = text;
    this.setState({
      list: arr
    });
  }

  remove(index) {
    const arr = this.state.list.slice();
    arr.splice(index, 1);
    this.setState({
      list: arr
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <CreateTodo add={this.add} />
        <ListTodo
          list={this.state.list}
          save={this.save}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default App;
