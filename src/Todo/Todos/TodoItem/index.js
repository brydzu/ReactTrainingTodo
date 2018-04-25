import React from "react";
import "./styles.css";

const TodoItem = props => {
  return (
    <li>
      <input
        className="todo-input"
        type="checkbox"
        checked={props.todo.checked}
        onClick={() => props.todoDone(props.todoIndex)}
      />
      <span className={props.todo.checked ? "line-through" : ""}>
        {props.todo.text}
      </span>
      <span
        className="todo-close"
        onClick={() => props.deleteTodo(props.todoIndex)}
      >
        X
      </span>
    </li>
  );
};

export default TodoItem;
