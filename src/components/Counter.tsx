import { useReducer } from "react";

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

type CounterState = {
  count: number;
};

const initialState = {
  count: 0
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter">
      <h2>Count : {state.count} </h2>
      <button
        onClick={() => dispatch({ type: "increment", payload: 5 })}
        className="btn primary-update-btn"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
        className="btn secondary-update-btn"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn secondary-btn"
      >
        Reset
      </button>
    </div>
  );
};
