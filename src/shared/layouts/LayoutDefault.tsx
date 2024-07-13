import styled from "styled-components";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

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
      <AnimatedCursor
        innerSize={12}
        outerSize={32}
        color="255, 165, 0"
        outerAlpha={0.3}
        innerScale={1.5}
        outerScale={3}
      />
      {children}
    </Container>
  );
};
