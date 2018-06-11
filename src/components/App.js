import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';
import list from '../todos.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    }
  }

  add = (inputValue) => {
    this.setState({
      list: [ ...this.state.list,
        {
          id: new Date().getTime(),
          text: inputValue
        }
      ]
    });
  }

  save = (id, text) => {
    this.setState({
      list: this.state.list.map((curr) => {
        if(curr.id === id){
          curr.text = text;
        }
        return curr;
      },)
    });
  }

  // save(id, text) {
  //   this.setState({
  //     list: this.state.list.map((curr) => {
  //       if(curr.id == id){
  //         return {...curr, text }
  //       }
  //       return curr;
  //     },)
  //   });
  // }

  remove = (id) => {
    this.setState({
      list: this.state.list.filter(function(el){
        return id !== el.id;
      })
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
