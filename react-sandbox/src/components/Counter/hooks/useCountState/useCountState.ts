import { useReducer } from "react";

export const increment = () => ({ type: "increment" } as const);
export const decrement = () => ({ type: "decrement" } as const);
export const reset = () => ({ type: "reset" } as const);
export const incrementSome = (num: number) =>
  ({ type: "incrementSome", payload: num } as const);
export const decrementSome = (num: number) =>
  ({ type: "decrementSome", payload: num } as const);
// export const wrongCreator = () => ({ type: 12 } as const);
export type ActionCreators =
  | typeof increment
  | typeof decrement
  | typeof reset
  | typeof incrementSome
  | typeof decrementSome;

const countReducer = (state: number, action: ReturnType<ActionCreators>) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "incrementSome":
      return state + action.payload;
    case "decrementSome":
      return state - action.payload;
    default:
      return state;
  }
};

export const useCountState = (initialState = 0) => {
  const [count, dispatch] = useReducer<typeof countReducer>(
    countReducer,
    initialState
  );
  return { count, dispatch };
};
