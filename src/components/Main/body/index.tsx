import React from "react";
import { Container, Content, Title, CardAnimated } from "./styles";
import { useSpring, animated } from "react-spring";

export const Body = () => {
  const fade = useSpring({
    from: { opacity: 0, transform: "translate3d(10px, 100px, 10px)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { duration: 1400 },
  });

  return (
    <Container>
      <Content>
        <Title>
          <div>
            <animated.h1 style={fade}>
              Olá. Bem-vindo ao meu portfólio de desenvolvimento web.
            </animated.h1>
          </div>
        </Title>
        <CardAnimated>
          <div>teste</div>
        </CardAnimated>
      </Content>
    </Container>
  );
};
