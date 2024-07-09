import React from "react";
import { useDarkMode } from "../../shared/contexts/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "../Buttons/ButtonIcon";

export const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          border: "1px solid black",
        }}
      >
        <h1>Navbar</h1>

        <ButtonIcon onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
      </div>
    </>
  );
};
