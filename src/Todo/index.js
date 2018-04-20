import React, { Component } from "react";
import TodoInput from "./TodoInput";
import Todos from "./Todos";

class Todo extends Component {
  state = {
    todoInputValue: "",
    todos: []
  };

  handleUpdate = text => {
    this.setState({
      todoInputValue: text
    });
  };

  render() {
    return (
      <div>
        <TodoInput
          updateInput={this.handleUpdate}
          todoInputValue={this.state.todoInputValue}
        />
        <Todos />
      </div>
    );
  }
}

export default Todo;
