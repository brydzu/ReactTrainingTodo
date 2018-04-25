import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => (
          <TodoItem
            todo={todo}
            todoIndex={i}
            deleteTodo={this.props.deleteTodo}
            todoDone={this.props.todoDone}
            key={i}
          />
        ))}
      </ul>
    );
  }
}

export default Todos;
