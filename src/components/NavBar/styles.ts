import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  /* border: 1px solid green; */
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  ul {
    display: flex;
    width: 90%;
    justify-content: space-around;
    gap: 1rem;
    padding-right: 1rem;
    li {
      list-style: none;
    }
  }
`;

export const Configs = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 80%;
  box-shadow: 0 0 5px 1px ${(props) => props.theme.shadow};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.paper};
  .icon {
    border: none;
    background-color: transparent;
    margin-left: 0.5rem;
  }
  .linkButton {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.paper};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.paper};
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
