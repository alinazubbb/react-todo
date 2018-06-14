import React, { Component } from 'react';
import ItemTodo from './ItemTodo';

class ListTodo extends Component {
  render(){
    return (
      <ul className="todo-list">
        {this.props.store.map((item) => {
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

export default ListTodo;