import { useEffect, useState } from "react";
import Button from "../../components/Buttons/button";
import { alternativeTexts } from "./alternativeTexts";
import { AnimatedText, Content } from "./styled";
import imageUrl from "../../assets/image3.png";
import Container from "../../components/Container/Container";

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
    <>
      <Container  p="10px" mb="100px">
        <Content width="60%">
          <div>
            <h1>
              Oi, eu me chamo <span>Eduardo!</span>
              <br />
              <AnimatedText>{actualText}</AnimatedText>
              <br />
            </h1>
          </div>
          <div className="buttons-content">
            <Button size="large" variation="primary">
              <a
                href="https://hjpiprodssvxevkqrati.supabase.co/storage/v1/object/public/curriculo_file/Curriculo_Eduardo%20(1).pdf?t=2024-08-04T18%3A31%3A46.919Z"
                download={"Eduardo Martins - CV.pdf"}
                target="_blank"
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
            <img src={imageUrl} alt="developer" />
          </div>
        </Content>
      </Container>
    </>
  );
};
