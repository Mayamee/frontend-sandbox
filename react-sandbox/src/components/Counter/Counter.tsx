import {
  useCountState,
  CountTypes,
  increment,
  decrement,
  reset,
  incrementSome,
  decrementSome,
} from "./hooks";

import {
  CounterButton,
  CounterButtonGroup,
  CounterTitle,
  CounterWrapper,
} from "./styles";

export const Counter = ({
  children,
}: {
  children?: (count: number) => JSX.Element;
} & Record<string, unknown>) => {
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
        <CounterTitle>
          {children ? children(count) : `Current count state is: ${count}`}
        </CounterTitle>
        <CounterButtonGroup>
          <CounterButton type="button" onClick={handleClickCount("increment")}>
            increment
          </CounterButton>
          <CounterButton type="button" onClick={handleClickCount("decrement")}>
            decrement
          </CounterButton>
          <CounterButton type="button" onClick={handleClickCount("reset")}>
            reset
          </CounterButton>
          <CounterButton
            type="button"
            onClick={handleClickCount("incrementSome")}
          >
            incrementSome
          </CounterButton>
          <CounterButton
            type="button"
            onClick={handleClickCount("decrementSome")}
          >
            decrementSome
          </CounterButton>
        </CounterButtonGroup>
      </div>
    </CounterWrapper>
  );
};
