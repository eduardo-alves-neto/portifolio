import React, { useEffect } from "react";
import styled from "styled-components";
import { useSideBar } from "../../shared/contexts/SideBarContext";

interface SidebarProps {
  isOpen?: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  z-index: 1000;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  color: white;
`;

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSideBar();

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <SidebarContent>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
