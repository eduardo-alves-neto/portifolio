import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 380px;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textBody};
  height: 100%;
  border-radius: 1rem;
  gap: 1rem;
`;

export const Logo = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 70px;
    height: 60px;
    object-fit: cover;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Description = styled.div`
  height: 80px;
`;

export const Footer = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  button {
    width: 100%;
    height: 55px;
    border-radius: 0.9rem;
    border: none;
    background-color: var(--text-body);
    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
    }
  }
`;
