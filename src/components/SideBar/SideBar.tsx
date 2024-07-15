import styled from "styled-components";
import { useSideBar } from "../../shared/contexts/SideBarContext";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import ButtonIcon from "../Buttons/ButtonIcon";
import { useDarkMode } from "../../shared/contexts/ThemeContext";
import logoDarkMode from "../../assets/logoDarkMode.png";
import logoLightMode from "../../assets/logoLightMode.png";
import { useEffect, useState } from "react";

interface SidebarProps {
  isOpen?: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  height: 100dvh;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 2px solid var(--color-grey-200);
  width: 300px;
  background-color: var(--color-grey-100);
  transition: 0.3s;
  z-index: 12;
  @media (max-width: 780px) {
    left: ${(props) => (props.isOpen ? 0 : -360)}px;
  }
`;

const SidebarContent = styled.div`
  height: 100dvh;
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    flex-direction: row;
    .option-sideBar {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      a {
        margin: 2rem;
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
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    .content-footer {
      a {
        font-size: 1.5rem;
        margin: 10px;
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
        padding: 1rem;
        font-size: 1.2rem;
        color: var(--color-grey-800);
      }
    }
  }
`;

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSideBar();
  const { isDarkMode } = useDarkMode();
  const [imageUrl, setImageUrl] = useState(
    isDarkMode ? logoDarkMode : logoLightMode
  );
  const [imageOpacity, setImageOpacity] = useState(1);
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight + "px"); // Adiciona estado para altura

  useEffect(() => {
    setImageOpacity(0);

    const timeoutId = setTimeout(() => {
      setImageUrl(isDarkMode ? logoDarkMode : logoLightMode);
      setImageOpacity(1);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarHeight(window.innerHeight + "px");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <SidebarContent>
        <div className="top">
          <img
            src={imageUrl}
            style={{
              opacity: imageOpacity,
              transition: "opacity 0.3s ease",
            }}
          />
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
          <div className="content-footer">
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
            <a href="https://github.com/eduardo-alves-neto" target="_blank">
              <FaGithub />
            </a>
            <p>{`@${new Date().getFullYear()} - Todos os direitos reservados. Desenvolvido por Eduardo neto`}</p>
          </div>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};
