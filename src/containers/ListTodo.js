import React, { Component } from 'react';
import ItemTodo from './ItemTodo';
import PropTypes from 'prop-types';

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

ListTodo.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  }))
}

export default ListTodo;