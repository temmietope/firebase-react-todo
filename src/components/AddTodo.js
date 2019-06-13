import React, { Component } from "react";

class AddTodo extends Component {
    state={
        title: ''
    }
  render() {
    return (
      <div>
        <form style={{display:'flex'}}>
          <input type="text" name="title" placeholder="Add Todo..." title={this.state.value} style={{flex:"10", padding: "5px"}}/>
          <input type="submit" value="Submit" className="btn" style={{flex:"1"}}/>
        </form>
      </div>
    );
  }
}

export default AddTodo;
