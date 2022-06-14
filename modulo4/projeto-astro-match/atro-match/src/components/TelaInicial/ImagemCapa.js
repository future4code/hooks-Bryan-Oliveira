import React from "react";
import styled from "styled-components";

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

`


const ImagemCapa = (props)=>{

    const retorno = ( <ImagemCapaDiv className="ImagemCapaDiv">
    <img src={props.profile.photo} />
</ImagemCapaDiv>) 


    return <>
       {retorno}
    </>
}

export default ImagemCapa