import { useContext } from "react";
import { Container, Content, Configs } from "./styles";
import { ThemeContext } from "../../shared/contexts/ThemeContext";
import React from "react";

export const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <Content>
        <ul>
          <li>Ensino</li>
          <li>Experiencia</li>
          <li>Projetos</li>
        </ul>

        <Configs>
          <button className="icon" onClick={toggleTheme}>
            <img
              src={
                theme === "light"
                  ? "src/assets/icondark.png"
                  : "src/assets/iconlight.png"
              }
            />
          </button>
          <button className="linkButton">
            <p>Vamos conversar?</p>
          </button>
        </Configs>
      </Content>
    </Container>
  );
};
