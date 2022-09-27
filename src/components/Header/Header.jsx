import React, {useContext} from "react";
import { BsMoon } from "react-icons/bs";
import {Container} from './styles'
import Switch from 'react-switch'
import { ThemeContext } from "styled-components";
const Header = ({toggleTheme}) => {
  const {colors, title} = useContext(ThemeContext)
  return (
    
    <Container>
    <header className="header">
    
      <h3>Where in the world?</h3>
      <div>
      <p>Dark Mode</p>
      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={20}
        handleDiameter={20}
        offColor={colors.background}
        onColor={colors.primary}
        /> 
      </div>
      
        
    </header>
    </Container>
  );
};

export default Header;
