import { createGlobalStyle } from "styled-components";
import RobotoFont from "./Fonts";

const GlobalStyle = createGlobalStyle`
${RobotoFont}
body{
    font: 1em Roboto, sans-serif;
    color: #fff;
    background-color: #EFF4F7;
}

/* Works on Firefox */
* {
  scrollbar-width: 7px;
  scrollbar-color: #0564c8 transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 7px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #0564c8;
  border-radius: 20px;
  border: 3px solid transparent;
}

*::-webkit-scrollbar-thumb:hover {
    display: block;
}
`

export default GlobalStyle