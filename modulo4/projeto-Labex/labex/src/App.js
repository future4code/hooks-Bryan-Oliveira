import Router from './Routes';
import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, DarkMode, IconMode } from './styles/styles';
import {MainDiv} from './styles/styles'
import light_mode from './images/light_mode.svg'
import dark_mode from './images/dark_mode.svg'
import bg_pattern_light_mode from './images/bg_pattern_light_mode.svg'
import './App.css'



function App() {
  const themeMode = localStorage.getItem('themeMode')==='true'? true : false
  const [isDarkTheme, setIsDarkTheme] = useState(themeMode)
  
  const setThemeMode = () =>{
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('themeMode', `${!isDarkTheme}`)
  } 

  return (
    <ThemeProvider theme={isDarkTheme? darkTheme: lightTheme}>
    <MainDiv id='App'>
        <DarkMode onClick={setThemeMode}> <IconMode src={isDarkTheme? light_mode : dark_mode } /></DarkMode>
        <GlobalStyle />
        <Router />
    </MainDiv>
      </ThemeProvider>
  );
}

export default App;
