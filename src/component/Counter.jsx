import React from "react";
import { useReducer } from "react";

const initialState = { count: 0 };

function reduce(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count < action.max ? state.count + action.deploy : state,
      };
    case "DECREMENT":
      return {
        count: state.count > action.min ? state.count - action.deploy : state,
      };
    case "RANDOM":
      return {
        count:
          Math.floor(Math.random() * (action.max + action.min)) - action.min,
      };
    default:
      return false;
  }
}

function Counter({ max = 10, min = 0 }) {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", deploy: 1, max })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", deploy: 1, min })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RANDOM", max, min })}>
        Random
      </button>
    </div>
  );
}

export default Counter;
