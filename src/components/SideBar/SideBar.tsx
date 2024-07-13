import styled from "styled-components";
import { useSideBar } from "../../shared/contexts/SideBarContext";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import ButtonIcon from "../Buttons/ButtonIcon";
import { useDarkMode } from "../../shared/contexts/ThemeContext";
import logoDarkMode from "../../assets/logoDarkMode.png";
import logoLightMode from "../../assets/logoLightMode.png";

interface SidebarProps {
  isOpen?: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  width: 360px;
  height: 100%;
  background-color: var(--color-grey-100);
  overflow-x: hidden;
  transition: 0.3s;
  z-index: 1000;
  @media (max-width: 780px) {
    left: ${(props) => (props.isOpen ? 0 : -360)}px;
  }
  border-right: 2px solid var(--color-grey-200);
`;

const SidebarContent = styled.div`
  padding: 1px;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    img {
      width: 100%;
    }
  }
  .body {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-direction: row;
    .option-sideBar {
      width: 90%;
      height: 99%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 50px;
      a {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--color-grey-800);
        text-decoration: none;
        transition: 0.3s;
        &:hover {
          color: var(--color-primary-500);
        }
      }
    }

    .toogle-sideBar {
      display: none;
      @media (max-width: 780px) {
        display: block;
        width: 9%;
        height: 100px;
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        svg {
          width: 2.5rem;
          height: 3rem;
          color: var(--color-brand-300);
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    gap: 10px;
    a {
      margin: 1rem;
      font-size: 1.5rem;
      color: var(--color-grey-800);
      transition: 0.3s;
      &:hover {
        color: var(--color-primary-500);
      }
      & svg {
        width: 3rem;
        height: 3rem;
        color: var(--color-brand-300);
      }
    }
    p {
      padding: 10px;
      font-size: 1.2rem;
      color: var(--color-grey-800);
    }
  }
`;

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSideBar();
  const { isDarkMode } = useDarkMode();
  const imageUrl = isDarkMode ? logoDarkMode : logoLightMode;

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      /> */}
      <SidebarContent>
        <div className="top">
          <img src={imageUrl} />
        </div>

        <div className="body">
          <div className="option-sideBar">
            <a>Home</a>
            <a>Sobre</a>
            <a>Serviços</a>
            <a>Portifolio</a>
            <a>Contato</a>
          </div>
          <div className="toogle-sideBar">
            <ButtonIcon
              isNotHovered
              onClick={() => {
                toggleSidebar();
              }}
            >
              <IoIosArrowBack />
            </ButtonIcon>
          </div>
        </div>

        <div className="footer">
          <div>
            <a
              href="https://www.instagram.com/eduardo_batista_1/?hl=pt-br"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-alves-0104042ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/eduardo-alves-neto">
              <FaGithub />
            </a>
          </div>
          <div>
            <p>{`@${new Date().getFullYear()} - Todos os direitos reservados. Desenvolvido por Eduardo neto`}</p>
          </div>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};
