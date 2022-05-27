import React from "react";
import axios from "axios"
// import { Buffer } from 'node:buffer';
// import request form 're'
// import Buffer from 'buffer'

var Buffer = require('buffer/').Buffer

class RequisicaoSpotfyapi extends React.Component{

    
    getAuthorizationAccess = ()=>{
        const client_id = '4b338dd2a24648c9a7ead5028b970def';
        const client_secret = 'd1d21d59c85d45069f18603db5720691';
        const url= 'https://accounts.spotify.com/api/token'
        const Body = {}
        const token = ''
        const grant_type= 'client_credentials'
        // your application requests authorization
        const authOptions = {
            headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
        };
  
  axios.post(`${url}/grant_type=${grant_type}`,authOptions).then((response)=>{
          token = response.access_token;
          console.log(response)
            url= 'https://api.spotify.com/v1/users/jmperezperez'
            const  options = {
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
          };
          axios.get(url,options).then((response)=>{
              console.log(response)
          }).catch((error)=>{
              console.log("erro em obter access token")
          })
        }).catch((error)=>{
            console.log("erro em obter resposta")
        })

    }
    
    
    render(){

        return <>
        <button onClick={this.getAuthorizationAccess}>testando api spotfy</button>
        </>
    }
}

export default RequisicaoSpotfyapi