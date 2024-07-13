import React from "react";
import { useDarkMode } from "../../shared/contexts/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "../Buttons/ButtonIcon";
import styled from "styled-components";
import { useSideBar } from "../../shared/contexts/SideBarContext";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 40px;
  top: 0;
  margin-bottom: 25px;
  margin-top: 5px;
  padding: 20px;
  @media (min-width: 768px) {
    .sidebar-toggle-btn {
      display: none;
    }
  }
`;

export const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isSidebarOpen, toggleSidebar } = useSideBar();

  return (
    <>
      <Container>
        <div className="sidebar-toggle-btn">
          <ButtonIcon onClick={toggleSidebar}>
            {isSidebarOpen ? <HiXMark /> : <HiBars3BottomRight />}
          </ButtonIcon>
        </div>

        <ButtonIcon onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
      </Container>
    </>
  );
};
