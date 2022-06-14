import styled, {keyframes} from 'styled-components'

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background: linear-gradient(45deg, #fbda61, #ff5acd);
`

const carregando = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
`;

export const Carregando = styled.div`
  animation: ${carregando} 1s linear infinite;
  margin: auto;
  text-align: center;
`;