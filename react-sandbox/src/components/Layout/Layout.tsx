import { PropsWithChildren } from "react";
import {
  LayoutContainer,
  LayoutFooter,
  LayoutHeader,
  LayoutMain,
  LayoutWrapper,
} from "./styles";

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <LayoutWrapper>
      <LayoutHeader>
        <LayoutContainer>This is Header</LayoutContainer>
      </LayoutHeader>
      <LayoutMain>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutMain>
      <LayoutFooter>
        <LayoutContainer>Mayamee</LayoutContainer>
      </LayoutFooter>
    </LayoutWrapper>
  );
};
