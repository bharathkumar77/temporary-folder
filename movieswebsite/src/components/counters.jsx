import React from "react";
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      {props.counters.map(counter => (
        <Counter
          id={counter.id}
          value={counter.value}
          handleIncrement={props.handleIncrement}
          handleDecrement={props.handleDecrement}
          handleRemove={props.handleRemove}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
