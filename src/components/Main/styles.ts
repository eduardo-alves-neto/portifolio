import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 768px) {
    left: 380px;
    width: calc(100% - 380px);
  }
`;

export const Content = styled.main`
  /* display: flex; */
`;
