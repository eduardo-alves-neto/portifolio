import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  ul {
    display: flex;
    width: 90%;
    justify-content: space-around;
    gap: 1rem;
    li {
      list-style: none;
    }
  }
`;

export const Configs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 50%;
  margin-left: 0.5rem;
  box-shadow: 0 0 5px 1px ${(props) => props.theme.shadow};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.paper};
  .icon {
    border: none;
    background-color: transparent;
    margin-left: 0.5rem;
  }
  .linkButton {
    border: none;
    width: 110%;
    background-color: transparent;
    p {
      font-size: 1rem;
      color: ${(props) => props.theme.textBody};
    }
  }
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    filter: contrast(0.1);
  }
`;
