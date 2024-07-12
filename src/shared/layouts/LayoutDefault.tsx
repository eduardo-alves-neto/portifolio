import styled from "styled-components";
import React from "react";
import { useSideBar } from "../contexts/SideBarContext";

interface ContainerProps {
  isSidebarOpen?: boolean;
}
const Container = styled.div<ContainerProps>`
  padding: 10px;
  @media (min-width: 765px) {
    left: calc(100%-250px);
  }
`;

interface LayoutDefaultProps {
  children: React.ReactNode;
}
export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  const { isSidebarOpen } = useSideBar();
  return <Container isSidebarOpen={isSidebarOpen}>{children}</Container>;
};
