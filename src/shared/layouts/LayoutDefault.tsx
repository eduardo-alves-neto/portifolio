import styled from "styled-components";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Container = styled.div`
  padding: 10px;
  /* border: 1px solid red; */
  transition: margin-left 0.3s ease;
  @media (min-width: 1500px) {
    margin-left: 100px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
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
