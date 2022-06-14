import React, { useEffect, useState } from "react";
import { clear, getMatches, matchesResult } from "../Requisicoes/Requisicoes";
import styled from "styled-components";

const DivMatches = styled.div`
overflow-y: scroll;
align-self: stretch;
padding: 0 5px;
max-height: 60%;
margin-bottom: 10px;

&::-webkit-scrollbar {
  width: 5px;               /* width of the entire scrollbar */
}

&::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}

&::-webkit-scrollbar-thumb {
  background-color: blue;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
`

const DivMatchesMap = styled.div`
align-self: stretch;
display: flex;
padding: 5px 0;
padding-left: 5px;
border-radius: 5px;
align-items: center;

&:hover{
    background-color: rgb(211,211,211, 0.3);
}
`
const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const ImgDiv = styled.div`
height: 3em;
width: 3em;
border-radius: 50%;
overflow: hidden;
margin-right: 10px;
`
const Button = styled.button`
padding: 10px 30px;
border: none;
font-weight: 500;
color: #fff;
cursor: pointer;
background-color: red;
`

const TelaDeMatches = ()=>{
    const [matches, setMatches] = useState([])
    const [temporizadorFinalizado, setTemporizadorFinalizado] = useState(false)
    
    useEffect(()=>{
        getMatches()
        
        const id = setTimeout(() => {
            setMatches(matchesResult)
            setTemporizadorFinalizado(true);
          }, 1000);
          return () => clearTimeout(id);

    },[])

    const matchesMap = matches.map((profile)=>{
      return  <DivMatchesMap>
            <ImgDiv>
            <Img src={profile.photo} alt={profile.alt}/>
            </ImgDiv>
            <span>
                {profile.name}
            </span>
        </DivMatchesMap>
    })

    return<>

    {temporizadorFinalizado && <><h2>Matches</h2>

    <DivMatches>
        {matchesMap}
    </DivMatches>
    <Button onClick={clear} >Limpar Matches</Button></>}
    {console.log('matches',matches)}

    </>
}

export default TelaDeMatches