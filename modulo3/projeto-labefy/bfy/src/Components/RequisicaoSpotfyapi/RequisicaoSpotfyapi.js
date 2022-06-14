import React from "react";

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class RequisicaoSpotfyapi extends React.Component{
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params
        if (token) {
          spotifyApi.setAccessToken(params);
        }
        this.state = {
          loggedIn: token ? true : false,
          nowPlaying: { name: 'Not Checked', albumArt: '' },
          tracks:[],
          token:token,
        }
        console.log(params)
        console.log(token)
        console.log(this.state.loggedIn)
        spotifyApi.setAccessToken(token)
        if(params.access_token){
        }
      }

    getHashParams = ()=> {
        var hashParams = window.location.href.split("code=").pop()
        // {};
        // var e, r = /([^&;=]+)=?([^&;]*)/g,
        //     q = window.location.hash.substring(1);
        // e = r.exec(q)
        // while (e) {
        //    hashParams[e[1]] = decodeURIComponent(e[2]);
        //    e = r.exec(q);
        // }
        return hashParams;

        
var clientId = '4b338dd2a24648c9a7ead5028b970def'; // Your client id
var clientSecret = 'd1d21d59c85d45069f18603db5720691'; // Your secret

        // const getToken = async () => {

        //     const result = await fetch('https://accounts.spotify.com/api/token', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type' : 'application/x-www-form-urlencoded', 
        //             'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        //         },
        //         body: 'grant_type=client_credentials'
        //     });
    
        //     const data = await result.json();
        //     return data.access_token;
        // }

        // const token = getToken()
        // return token
      } 

      serachTracksFromSpotfyApi = ()=>{
        spotifyApi.searchTracks('Love').then(
            function (data) {
              console.log('Search by "Love"', data);
            },
            function (err) {
              console.error(err);
            }
          );
      }
    
      componentDidMount(){
        spotifyApi.setAccessToken(this.state.token)

      }
    
    
    render(){

        return <>
        <button onClick={this.serachTracksFromSpotfyApi}>testando api spotfy</button>
        </>
    }
}

export default RequisicaoSpotfyapi