import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
    font-size: 16px;
    transition: 1000ms;
}

body{
    background-color: ${({ theme }) => theme.background};
}

h1{
    font-size: 24px;
}

h2{
    font-size: 20px;
}


`

export default GlobalStyle