import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

App.propTypes = {
  store: PropTypes.arrayOf(PropTypes.object)
}

export default connect( store => ({ store: store.listState }) )(App);