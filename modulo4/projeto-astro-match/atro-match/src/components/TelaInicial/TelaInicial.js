import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carregando } from "../../theme/style";

import { getProfileToChoose,  ChoosePerson,  profileToChose } from "../Requisicoes/Requisicoes";

import ImagemCapa from "./ImagemCapa";





const ProfileInfos = styled.div`
text-align: center;
padding: 30px 20px;
position: absolute;
transition: 0.5s;

height: 100%;
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;

overflow: hidden;

transition: 0.5s;

h2{
    margin: 0px;
}

p{
    font-weight: 500;
    opacity: 0.5;
    line-height: 1.2em;
}
`

const BotoesLikeDiv = styled.div`
display: flex;
justify-content: space-between;
width: 60%;

transition: 0.5s;

transform: translateY(150px);

button{
    padding: 10px 30px;
    border: none;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
}
`

const BotaoDislike = styled.button`

    background-color: #ff5f95;

`

const BotaoLike = styled.button`
    /* background: #ff5f95; */
background-color: lightgreen;
`

const Span = styled.span`
font-weight: 600;
text-align: center;
margin: auto;
`

const TelaInicial = (props) =>{
    const [escolha, setEscolha] = useState('')
    const [profile, setProfile] = useState({...profileToChose})
    const [temporizadorFinalizado , setTemporizadorFinalizado] = useState(false)

    
    
    useEffect(()=>{
        getProfileToChoose()

        const id = setTimeout(() => {
            setProfile(profileToChose)
            setTemporizadorFinalizado(true)
          }, 1000);
          return () => clearTimeout(id);
    }, [])

    useEffect(()=>{
        setTemporizadorFinalizado(true)
    },[profile])
    
    

    const onClickLike = ()=>{
        ChoosePerson(profileToChose.id , true)
        setTemporizadorFinalizado(false)
        getProfileToChoose()
        
        const id = setTimeout(() => {
            setProfile(profileToChose)
          }, 1000);
          return () => clearTimeout(id);

    }

    const onClickDislike = ()=>{
        ChoosePerson(profileToChose.id , false)
        setTemporizadorFinalizado(false);
        getProfileToChoose()

        const id = setTimeout(() => {
            setProfile(profileToChose)
            setTemporizadorFinalizado(true);
          }, 1000);
          return () => clearTimeout(id);
        
    }
    


    const profileInfos = <ProfileInfos className="ProfileInfos">
    <h2>
        {profile.name}, {profile.age}
    </h2>
    <p>
        {profile.bio}
    </p>

<BotoesLikeDiv className="BotoesLikeDiv">
    <BotaoDislike onClick={onClickDislike}>
        dislike
    </BotaoDislike>

    <BotaoLike onClick={onClickLike}>
        like
    </BotaoLike>
</BotoesLikeDiv>
</ProfileInfos>

    return <>
            {console.log("timer", temporizadorFinalizado)}
            {temporizadorFinalizado?  profile.name? <><ImagemCapa escolha={escolha} profile={profile}/>
            {profileInfos}
            </> : <Span>Nenhum perfil encontrado! tente recarregar a página, caso não funcione resete os matches</Span> : <Carregando>Carregando</Carregando>}
    </>
}

export default TelaInicial