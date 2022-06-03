import React, {useState , useEffect} from "react";
import styled, { keyframes } from "styled-components";
import { profileToChose } from "../Requisicoes/Requisicoes";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg), translateX(10px);
  }
`;

const ImagemCapaDiv = styled.div`
position: absolute;
top: -50px;

height: 200px;
width: 150px;

border-radius: 20px; 
box-shadow: 0 15px 50px rgba(0,0,0,0.35);

transition: 0.5s;

overflow: hidden;

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

${props => props.escolha && ({
})
}
`


// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled(ImagemCapaDiv)`
  animation: ${rotate} 5s linear;
`;


const ImagemCapa = (props)=>{
    console.log(props.escolha)

    
    const retorno = !props.escolha? ( <ImagemCapaDiv className="ImagemCapaDiv">
    <img src={props.profile.photo} />
</ImagemCapaDiv>) : ( <Rotate className="ImagemCapaDiv">
                <img src={props.profile.photo} />
            </Rotate>)


    return <>
       {retorno}
    </>
}

export default ImagemCapa