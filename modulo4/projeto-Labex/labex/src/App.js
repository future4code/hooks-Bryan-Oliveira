import Router from './Routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

const MainDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;

align-items: center;
padding-top: 30px;
`

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'with-border' },
          style: {
            textTransform: 'none',
            border: `1px solid ${blue[500]}`,
            borderRadius: `5px`
          },
        },
        {
          props: { variant: 'no-border', color: 'secondary' },
          style: {
            backgroundColor: `${red[500]}`,
          },
        },
      ],
    },
  },
});

function App() {

  return (
    <MainDiv>
      <GlobalStyle />
      {/* {console.log(theme)} */}
      {/* <ThemeProvider theme={theme} > */}
        {/* <Button variant='with-border'>with border</Button> */}
      <Router />
      {/* </ThemeProvider> */}
    </MainDiv>
  );
}

export default App;
