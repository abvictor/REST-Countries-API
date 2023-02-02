import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <header className="header">
        <h3>Where in the world?</h3>
        <div className="color-mode">
          {title === "dark" && (
            <div className="color-mode__items">
              <BsSun size={24} />
              <p>Light Mode</p>
            </div>
          )}
          {title === "light" && (
            <div className="color-mode__items">
              <BsMoon size={24} />
              <p>Dark Mode</p>
            </div>
          )}
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={20}
            handleDiameter={20}
            offColor={colors.switcher}
            onColor={colors.switcher}
          />
        </div>
      </header>
    </Container>
  );
};

export default Header;
