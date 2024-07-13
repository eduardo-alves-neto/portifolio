import styled from "styled-components";
import { useSideBar } from "../../shared/contexts/SideBarContext";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
  }
  .body {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
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
  const { isSidebarOpen } = useSideBar();

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <SidebarContent>
        <div className="top">
          <h1>Logo</h1>
        </div>

        <div className="body">
          <a>Home</a>
          <a>Sobre</a>
          <a>Serviços</a>
          <a>Portifolio</a>
          <a>Contato</a>
        </div>

        <div className="footer">
          <div>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
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
