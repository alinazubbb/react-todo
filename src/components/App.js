import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <CreateTodo />
        <ListTodo store={this.props.store} />
      </div>
    );
  }
}

export default connect( store => ({ store: store.listState }) )(App);