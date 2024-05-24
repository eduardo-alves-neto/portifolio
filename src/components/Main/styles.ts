import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  @media (min-width: 768px) {
    left: 380px;
    width: calc(100% - 380px);
  }
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
`;
