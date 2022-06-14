import React, {useState, useEffect} from "react"
import styled, {createGlobalStyle} from "styled-components";

import TelaInicial from "./components/TelaInicial/TelaInicial";
import { MainDiv } from "./theme/style";
import  matches_icon  from "./img/matches_icon.svg";
import TelaDeMatches from "./components/TelaDeMatches/TelaDeMatches";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Questrial&family=Quicksand&family=Roboto&family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@100;300&display=swap');

*{
  font-family: 'Roboto', sans-serif;
}
`


const PerfilDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;

height: 450px;
width: 350px;
background-color:#fff ;

border-radius: 20px;
box-shadow: 0 35px 80px rgba(0,0,0,0.5);
transition: 0.5s;

@media screen and (min-width: 850px){
  
  
  height: 250px;

  &:hover{
      height: 450px;
  
      
      .ImagemCapaDiv{
          height: 250px;
          width: 230px;
      }
    
      .BotoesLikeDiv{
          transform: translatey(0px);
      }
    
      .ProfileInfos{
          transform: translateY(-20%);
          align-items: center;
      }
      
    }
  }

  @media screen and (max-width: 849px){
    .ImagemCapaDiv{
          height: 250px;
          width: 230px;
      }
    
      .BotoesLikeDiv{
          transform: translatey(0px);
      }
    
      .ProfileInfos{
          transform: translateY(-20%);
          align-items: center;
      }
  }

`

const PerfilDivHeader = styled.div`
display: flex;
align-self: stretch;
width: 100%;
align-items: center;
justify-content: flex-end;
z-index: 1;
`

const Img= styled.img`
width: 40px; 
height: 40px;
cursor: pointer;
`

function App() {
  const [tela , setTela] = useState('telaInicial')


  const setTelaAtual = ()=>{
    tela === 'telaInicial'? setTela('telaDeMatches'): setTela('telaInicial')
  }

  const defineTelaAtual = ()=>{
    switch (tela){
      case 'telaInicial':
        return <TelaInicial />
      case 'telaDeMatches':
        return <TelaDeMatches />
    }
  }

  useEffect(()=>{
    

}, [])


  return (
    <MainDiv>
      <GlobalStyle />
      <PerfilDiv>
  
        <PerfilDivHeader>
          <Img  onClick={setTelaAtual} src={matches_icon} alt="matches-icon" />
        </PerfilDivHeader>

        {defineTelaAtual()}

      </PerfilDiv>

      <h1 style={{color: "blue"}}>Astro match</h1>

    </MainDiv>
  );
}

export default App;
