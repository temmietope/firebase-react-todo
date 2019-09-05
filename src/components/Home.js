import React, { Component } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { DB_CONFIG } from "../Config/config";
import firebase from "firebase/app";
import "firebase/database"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    };
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child("todos")
  }

  componentWillMount() {
    const previousTodos = this.state.todos
    this.db.on('child_added', (snap) => {
      previousTodos.push({
        id: snap.key,
        title: snap.val().title,
        completed: false
      })
      this.setState({
        todos: previousTodos
      })
    })
    this.db.on('child_removed', (snap) => {
      for (let i = 0; i < previousTodos.length; i++) {
        if (previousTodos[i].id === snap.key) {
          previousTodos.splice(i, 1);
        }
      }
      this.setState({
        todos: previousTodos
      })
    })
    this.db.on('child_changed', (snap) => {
      previousTodos.map(todo => {
        if (todo.id === snap.key) {
          todo.completed = !todo.completed;
        }
        return todo
      })
      this.setState({
        todos: previousTodos
      })
    })
  }

  //toggle completed
  markComplete = (id, completed) => {
    this.db.child(id).update({ completed: completed })

  };
  //delete Todo
  delTodo = id => {
    this.db.child(id).remove()
  };
  //add Todo
  addTodo = title => {
    this.db.push().set({ title: title })
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
