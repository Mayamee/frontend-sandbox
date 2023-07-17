import {
  useCountState,
  CountTypes,
  increment,
  decrement,
  reset,
  incrementSome,
  decrementSome,
} from "./hooks";

import { CounterWrapper } from "./styles";

export const Counter = () => {
  const { count, dispatch } = useCountState(0);
  const handleClickCount = (type: CountTypes) => (): void => {
    switch (type) {
      case "increment": {
        dispatch(increment());
        break;
      }
      case "decrement": {
        dispatch(decrement());
        break;
      }
      case "reset": {
        dispatch(reset());
        break;
      }
      case "decrementSome": {
        dispatch(decrementSome(5));
        break;
      }
      case "incrementSome": {
        dispatch(incrementSome(5));
        break;
      }
      default: {
        const _exhaustiveCheck: never = type;
        return _exhaustiveCheck;
      }
    }
  };
  return (
    <CounterWrapper>
      <div>
        <p>Current count state is: {count}</p>
        <button type="button" onClick={handleClickCount("increment")}>
          increment
        </button>
        <button type="button" onClick={handleClickCount("decrement")}>
          decrement
        </button>
        <button type="button" onClick={handleClickCount("reset")}>
          reset
        </button>
        <button type="button" onClick={handleClickCount("incrementSome")}>
          incrementSome
        </button>
        <button type="button" onClick={handleClickCount("decrementSome")}>
          decrementSome
        </button>
      </div>
    </CounterWrapper>
  );
};
