import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';


import { useState } from 'react';
import GlobalStyle from './styles/globalStyles'

import light from './styles/themes/light'
import dark from './styles/themes/dark'


function App() { 
const [theme, setTheme] = useState(light)

const toggleTheme = () =>{
  setTheme(theme.title === 'light'? dark : light)
}
   return (
    <ThemeProvider  theme={theme}>
    <GlobalStyle />
    <Header toggleTheme={toggleTheme}/>
    <Countries/>
  </ThemeProvider>
  );
}

export default App;
