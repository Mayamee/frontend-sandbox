import { default as styled } from "styled-components";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const LayoutHeader = styled.header`
  border-bottom: 1px solid #ccc;
	padding: 20px 0;
`;

export const LayoutMain = styled.main`
	padding-top: 20px;
  flex-grow: 1;
`;

export const LayoutFooter = styled.footer``;

export const LayoutContainer = styled.div<{ fluid?: boolean }>`
  max-width: ${({ fluid }) => (fluid ? "100%" : "1200px")};
  margin: 0 auto;
  padding: 0 20px;
`;
