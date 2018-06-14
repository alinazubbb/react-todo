import React, { Component } from 'react';
import ItemTodo from './ItemTodo';
import { connect } from 'react-redux';

class ListTodo extends Component {
  render(){
    return (
      <ul className="todo-list">
        {this.props.state.map((item) => {
          return (
          <ItemTodo
            key={item.id}
            id={item.id}
            text={item.text}
          />
        )})}
      </ul>
    );
  }
}

export default connect( state => ({ state: state.listState }) )(ListTodo);