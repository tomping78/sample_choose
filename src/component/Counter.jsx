import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "RESET") {
    return { count: state.count * action.deploy };
  } else if (action.type === "INCREMENT") {
    return { count: state.count + action.deploy };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - action.deploy };
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, { count: 0 });

  const onReset = () => {
    dispatch({ type: "RESET", deploy: 0 });
  };
  const onIncrement = () => {
    dispatch({ type: "INCREMENT", deploy: 1 });
  };
  const onDecrement = () => {
    dispatch({ type: "DECREMENT", deploy: 1 });
  };
  return (
    <>
      <h3>{number.count}</h3>
      <button onClick={onReset}>reset</button>
      <button onClick={onIncrement}>plus</button>
      <button onClick={onDecrement}>minus</button>
    </>
  );
}
export default Counter;
