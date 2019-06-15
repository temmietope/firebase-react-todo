import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
    this.refs.input.value=''
  };
  onChange = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            ref='input'
            placeholder="Add Todo..."
            title={this.state.value}
            onChange={this.onChange}
            style={{ flex: "10", padding: "5px" }}
          />

          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
