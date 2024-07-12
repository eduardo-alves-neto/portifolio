import React, { createContext, useState } from "react";

interface SideBarContextProps {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
}

const SideBarContext = createContext({} as SideBarContextProps);

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <SideBarContext.Provider
      value={{ isSidebarOpen: isSidebarOpen, toggleSidebar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => {
  const context = React.useContext(SideBarContext);
  if (context === undefined) {
    throw new Error("useSideBar must be used within a SideBarProvider");
  }
  return context;
};
