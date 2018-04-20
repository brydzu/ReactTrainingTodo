import React from "react";

const TodoInput = props => {
  return (
    <input
      type="text"
      onInput={event => props.updateInput(event.target.value)}
      onKeyDown={event => props.addTodo(event)}
      value={props.todoInputValue}
    />
  );
};

export default TodoInput;
