import React from "react";
import "./styles.css";

const TodoItem = props => {
  return (
    <li>
      <input type="checkbox" value={props.todo.checked} />
      <span className={props.todo.checked ? "line-through" : ""}>
        {props.todo.text}
      </span>
      <span onClick={() => props.deleteTodo(props.todoIndex)}>X</span>
    </li>
  );
};

export default TodoItem;
