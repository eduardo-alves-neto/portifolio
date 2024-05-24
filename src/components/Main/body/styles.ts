import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 50px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 1.5rem;

  div {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 2.4rem;
    }
  }
`;

export const CardAnimated = styled.div`
  border: 1px solid red;
  width: auto;
  height: 200px;
  /* overflow: hidden; */
`;
