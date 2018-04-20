import React from "react";

export default props => {
  return (
    <li>
      <span>{props.todoText}</span>
      <input type="checkbox" />
      <span>X</span>
    </li>
  );
};
