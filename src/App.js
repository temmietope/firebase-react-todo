import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import { rand } from "./utils/random";
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with Wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with Boss",
        completed: false
      }
    ]
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
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
   
      return (
        <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}
          />
        </div>
      </div>
     
    </Router>
     );
  }
}

export default App;
