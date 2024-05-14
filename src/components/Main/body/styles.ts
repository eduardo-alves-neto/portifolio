import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  margin-top: 3rem;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textBody};
  border-radius: 1rem;
`;
