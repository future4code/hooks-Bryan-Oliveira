import Router from './Routes';
import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/styles';
import {MainDiv} from './styles/styles'


function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  
  return (
    <ThemeProvider theme={isDarkTheme? darkTheme: lightTheme}>
    <MainDiv>
        <button onClick={()=>setIsDarkTheme(!isDarkTheme)}> dark mode</button>
        <GlobalStyle />
        <Router />
    </MainDiv>
      </ThemeProvider>
  );
}

export default App;
