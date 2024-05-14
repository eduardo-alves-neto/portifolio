import React from "react";
import { Container, Content, Logo, Description, Image, Footer } from "./styles";

export const Menu = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="src/assets/logo.png" alt="logo" />

          <h1>Eduardo Neto</h1>
        </Logo>

        <Image>
          <img src="src/assets/img.png" alt="developer" />
        </Image>
        <Description>
          <p>Expecialidades:</p>
          <h3>Desenvolvedor Front-End</h3>
        </Description>
        <Description>
          <h3>ola mundo</h3>
        </Description>
        <Footer>
          <button>
            <a href="#">Vamos conversar</a>
          </button>
        </Footer>
      </Content>
    </Container>
  );
};
