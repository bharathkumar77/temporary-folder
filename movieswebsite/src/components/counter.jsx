import React from "react";
const Counter = props => {
  return (
    <div>
      <button
        class="btn btn-success"
        onClick={() => props.handleIncrement(props.id)}
      >
        <i class="fas fa-plus"></i>{" "}
      </button>
      <span class="badge">{props.value}</span>
      <button
        class="btn btn-danger"
        onClick={() => props.handleDecrement(props.id)}
      >
        <i class="fas fa-minus"></i>
      </button>
      <button
        class="btn btn-warning"
        onClick={() => props.handleRemove(props.id)}
      >
        <i class="fas fa-times"></i>
      </button>
      <button
        class="btn btn-warning"
        onClick={() => props.handleDelete(props.id)}
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Counter;
