import styled from "styled-components";
import React from "react";

const Container = styled.div`
  padding: 10px;
  transition: margin-left 0.3s ease;

  @media (min-width: 780px) {
    margin-left: 360px;
  }
`;

interface LayoutDefaultProps {
  children: React.ReactNode;
}
export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Container>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      /> */}
      {children}
    </Container>
  );
};
