import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons/button";
import { alternativeTexts } from "./initialValues";
import { AnimatedText, Container, Content } from "./styled";

export const Home = () => {
  const [actualText, setActualText] = useState(alternativeTexts[0]);
  let indiceAtual = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      indiceAtual = (indiceAtual + 1) % alternativeTexts.length;
      setActualText(alternativeTexts[indiceAtual]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Content width="60%" height="600px">
        <div>
          <h1>
            Oi, eu sou o <span>Eduardo!</span>
            <br />
            <AnimatedText>{actualText}</AnimatedText>
            <br />
          </h1>
        </div>
        <div className="buttons-content">
          <Button size="large" variation="primary">
            <a
              href="https://docs.google.com/document/d/1vYLG_41xy-8NGPmX9HeG441e_TIvuC6Y0kHZdbk6o9M/export?format=pdf"
              download={"Eduardo Martins - CV.pdf"}
            >
              Baixar CV
            </a>
          </Button>
          <Button size="large" variation="secondary">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-alves-0104042ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              Vamos conversar?
            </a>
          </Button>
        </div>

        <div className="card-contact">
          <a href="mailto:eduardoalvesmartinsneto@gmail.com">
            eduardoalvesmartinsneto@gmail.com
          </a>
          <p>(83) 9 9960-3051</p>
        </div>
      </Content>
      <Content width="40%">
        <div className="img">
          <img src="/src/assets/image3.png" alt="Desenvolved" />
        </div>
      </Content>
    </Container>
  );
};