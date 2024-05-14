import React from "react";
import { NavBar } from "../NavBar";
import { Body } from "./body";
import { Container, Content } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Content>
        <NavBar />
        <Body></Body>
      </Content>
    </Container>
  );
};
