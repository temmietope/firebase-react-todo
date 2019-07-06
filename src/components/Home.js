import React, { Component } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { rand } from "../utils/random";

class Home extends Component {
  state = {
    todos: []
  };

  //toggle completed
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //delete Todo
  delTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };
  //add Todo
  addTodo = title => {
    const newTodo = {
      id: rand(),
      title: title,
      completed: false
    };
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default Home;
