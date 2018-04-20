import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  state = {};
  render() {
    return (
      <ul>
        <TodoItem todoText="test" />
      </ul>
    );
  }
}

export default Todos;
