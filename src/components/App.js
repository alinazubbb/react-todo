import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <CreateTodo />
        <ListTodo />
      </div>
    );
  }
}

export default App;
