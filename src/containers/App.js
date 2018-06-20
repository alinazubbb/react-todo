import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';
import PropTypes from 'prop-types';

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

App.propTypes = {
  store: PropTypes.arrayOf(PropTypes.object)
}

export default App;