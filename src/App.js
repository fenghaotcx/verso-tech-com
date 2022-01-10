import React, { useState, useEffect, createContext } from 'react';
import Content from './components/desktop/Content';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, DARK_THEME } from './constants';
import useMobileDown from './hooks/useMobileDown';
import useWindowSize from './hooks/useWindowSize';
import LeftBar from './components/desktop/LeftBar';
// import { useLocation  } from "react-router-dom";
import Container from "./page/Container";

export const GlobalContext = createContext({})

function App() {
  const isMobile = useMobileDown()
  const [theme, setTheme] = useState(DARK_THEME);
  const [isopen,setShow] = useState(false)
  const {windowWidth} = useWindowSize()
  // const params = useLocation();
  useEffect(() => {
    // const currentTheme = localStorage.getItem('theme');
    // if (currentTheme) {
    //   setTheme(currentTheme);
    // }
  }, []);

  const toggleDrawer = open => {
    setShow(open)
  };

  const changeTheme = () => {
    if (theme === LIGHT_THEME) {
      setTheme(DARK_THEME);
      localStorage.setItem('theme', DARK_THEME);
    } else {
      setTheme(LIGHT_THEME);
      localStorage.setItem('theme', LIGHT_THEME);
    }
  };

  return (
    <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
      <GlobalContext.Provider value={{isMobile,toggleDrawer,isopen,changeTheme,theme,windowWidth}}>
        <Container>
          {isMobile && <LeftBar /> }
          <Content theme={theme} isMobile={isMobile} />
        </Container>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
