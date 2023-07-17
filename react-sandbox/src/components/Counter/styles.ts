import { default as styled } from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterButton = styled.button``;

export const CounterTitle = styled.p``;

export const CounterButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${CounterButton} {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
