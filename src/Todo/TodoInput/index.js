import React from "react";

export default props => {
  return (
    <input
      type="text"
      onInput={event => props.updateInput(event.target.value)}
      value={props.todoInputValue}
    />
  );
};
