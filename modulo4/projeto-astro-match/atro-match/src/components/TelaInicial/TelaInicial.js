import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainDiv } from "../../theme/style";
import axios from "axios";

import { getProfileToChoose, getMatches, ChoosePerson, clear, matches, profileToChose, getProfileToChooseURL  } from "../Requisicoes/Requisicoes";

import  matches_icon  from "../../img/matches_icon.svg";
import ImagemCapa from "./ImagemCapa";


const PerfilDiv = styled.div`
display: flex;
flex-direction: column;
/* justify-content: space-evenly; */
align-items: center;
position: relative;

height: 250px;
width: 350px;
background-color:#fff ;

border-radius: 20px;
/* border: 1px solid black; */
box-shadow: 0 35px 80px rgba(0,0,0,0.5);
transition: 0.5s;

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
`
const PerfilDivHeader = styled.div`
display: flex;
align-self: stretch;
width: 100%;
align-items: center;
justify-content: flex-end;
`


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
    background: #ff5f95;
    color: #fff;
    cursor: pointer;

    

}
`
const TelaInicial = (props) =>{
    const [escolha, setEscolha] = useState('')
    
    
    useEffect(()=>{
        axios.get(getProfileToChooseURL)
        .then((response)=>{
            setProfile(response.data.profile)
        console.log(profileToChose)}
        ).catch((error)=>{
            console.log(error)
        })
    }, [])
    
    const [profile, setProfile] = useState({...profileToChose})
    

    const onClickLike = ()=>{
        ChoosePerson(profileToChose.id , true)
        getProfileToChoose()
        setInterval(()=>{
            setProfile(profileToChose)
        }, 1000)
    }

    const onClickDislike = ()=>{
        ChoosePerson(profileToChose.id , false)
        getProfileToChoose()
        setInterval(()=>{
            setProfile(profileToChose)
        }, 1000)
    }
    

    return <MainDiv>
        <PerfilDiv>
            <PerfilDivHeader>

                <img style={{width: "50px", height: "50px"} } src={matches_icon} alt="matches-icon" />
            </PerfilDivHeader>

            <ImagemCapa escolha={escolha} profile={profile}/>

            <ProfileInfos className="ProfileInfos">
                <h2>
                    {profile.name}, {profile.age}
                </h2>
                <p>
                    {profile.bio}
                </p>

            <BotoesLikeDiv className="BotoesLikeDiv">
                <button onClick={onClickDislike}>
                    dislike
                </button>

                <button onClick={onClickLike}>
                    like
                </button>
            </BotoesLikeDiv>
            </ProfileInfos>

        
        </PerfilDiv>

        <h1 style={{color: "blue"}}>Astro match</h1>
    
    </MainDiv>
}

export default TelaInicial