import React from "react";
import styled from "styled-components";
import Button from "../../components/Buttons/button";

interface ContentProps {
  width?: string;
  height?: string;
}

const Container = styled.div`
  display: flex;
  padding-top: 90px;
  padding-left: 90px;
  flex-wrap: wrap-reverse;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 1000px) {
    padding-top: 0px;
    & > div {
      width: 100% !important;
    }
    & > div {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

const Content = styled.div<ContentProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  min-width: 300px;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    span {
      color: var(--color-grey-400);
    }
  }
  .buttons-content {
    display: flex;
    justify-content: left;
    margin-top: 100px;
    gap: 10px;
  }
  .img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .card-contact {
    border-left: 8px solid var(--color-yellow-700);
    border-radius: 8px;
    margin-top: 80px;
    padding: 10px;
    padding-left: 10px;
    p {
      font-size: 1.7rem;
      color: var(--color-grey-500);
    }
  }
`;

export const Home = () => {
  return (
    <Container>
      <Content width="60%" height="600px">
        <div>
          <h1>
            Oi, eu sou o <span>Eduardo!</span>
            <br />
            Desenvolvedor web
            <br />
          </h1>
        </div>
        <div className="buttons-content">
          <Button size="large" variation="primary">
            Baixar CV
          </Button>
          <Button size="large" variation="secondary">
            Vamos conversar?
          </Button>
        </div>

        <div className="card-contact">
          <p>eduardoalvesmartinsneto@gmail.com</p>
          <p>(11) 9 9999-9999</p>
        </div>
      </Content>
      <Content width="40%">
        <div className="img">
          <img src="/src/assets/image.png" alt="Desenvolved" />
        </div>
      </Content>
    </Container>
  );
};
