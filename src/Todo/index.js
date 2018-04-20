import React, { Component } from "react";
import TodoInput from "./TodoInput";
import Todos from "./Todos";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }
  state = {
    todoInputValue: "",
    todos: []
  };

  handleUpdate = text => {
    console.log(text);
    this.setState({
      todoInputValue: text
    });
  };

  deleteTodo = i => {
    const newTodos = this.state.todos.slice();
    newTodos.splice(i, 1);

    this.setState({
      todos: newTodos
    });
  };

  addTodo(event) {
    if (event.keyCode === 13) {
      const newTodos = this.state.todos.concat({
        checked: false,
        text: this.state.todoInputValue
      });

      this.setState({
        todos: newTodos
      });
    }
  }

  render() {
    return (
      <div>
        <TodoInput
          todoInputValue={this.state.todoInputValue}
          updateInput={this.handleUpdate}
          addTodo={this.addTodo}
        />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;
