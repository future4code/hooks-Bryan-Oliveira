import React from "react";
import styled from "styled-components"
import ReactAudioPlayer from 'react-audio-player';

const MainDiv = styled.div`
display: flex;
justify-content: center;
flex-grow: 1;
height: 400px;
color: #073944;

`

const Div = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 95%;
height: 100%;
border-radius: 3px;
box-shadow: 0 0 0.1em 0.1em #073944;
overflow-y: scroll;
background-color: #39A2DB;

`

const DivplaylistMap = styled.div`
display: flex;
flex-direction: column;
`
const H2 = styled.h2`
align-self: center;
margin-left: 2.5%;
`
const H3 = styled.h3`
align-self: center;
`

const ButtonAddPlaylist = styled.button`
background-color: transparent;
border-radius: 3px;
color: #073944;
margin-top: 20px;
padding: 3px;
align-self: center;
cursor: pointer;


-webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;

&:hover{
    background-color: #EFF4F7;
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;
}
`
const ButtonRemoverMusica = styled.button`
background-color: transparent;
border-radius: 3px;
color: #073944;
padding: 3px;
margin-left: 15px;
cursor: pointer;
align-self: flex-start;


-webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;

&:hover{
    /* background-color: #EFF4F7; */
    background-color: #39A2DB;
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;
}
`
const DivPlayer = styled.div`
width: 40%;
`

const Input = styled.input`
border-radius: 3px;
width: 95%;
align-self: center;
`

const Label = styled.label`
margin-left: 2.5%;
font-weight: 600;
`

const Span = styled.span`
font-weight: 700;
`

const DivMusicasMap = styled.div`
display: flex;
justify-content: space-between;
width: 95%;
background-color: #ffffff;
box-shadow: 0 0 0.1em 0.1em #073944;
margin-bottom: 30px;
align-self: center;
border-radius: 3px;
padding: 5px;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

class PlaylistInfos extends React.Component{
    state = {
        newTrackName: '',
        newTrackArtist:'',
        newTrackURL: '',
    }


    onChangeNewTrackName = (event)=>{
        this.setState({newTrackName: event.target.value})
    }

    onChangeNewTrackArtist = (event)=>{
        this.setState({newTrackArtist: event.target.value})
    }

    onChangeNewTrackURL = (event)=>{
        this.setState({newTrackURL: event.target.value})
    }

    onKeyDown = (event)=>{
        if(event.keyCode === 13){
            this.onClickAddMusica(this.props.playlistInfos, {name: this.state.newTrackName,
                artist: this.state.newTrackArtist, url: this.state.newTrackURL})
            }
      
    }
    onClickAddMusica = (playlist, trackInfo)=>{
        let camposVazios= []
        !this.state.newTrackName && camposVazios.push('nome') 
        !this.state.newTrackArtist && camposVazios.push('artistas')
        !this.state.newTrackURL && camposVazios.push('url') 


        camposVazios.length===1 && alert(`o campo de ${camposVazios[0]} deve ser preenchido`)
        camposVazios.length>1 && alert(`os campos de ${camposVazios} deve ser preenchido`)
        camposVazios.length===0 && this.props.addTrackToPlaylist(playlist, trackInfo) || this.setState({newTrackName: '',
        newTrackArtist:'',
        newTrackURL: '',})
    }

    removerMusicaDaPlaylist = (playlist, trackId)=>{
       window.confirm("tem certeza que deseja deletar essa música da playlist?") && this.props.removeTrackFromPlaylist(playlist,trackId)
    }

    render(){
        const playlist = <>
        <div>
            <H2>{this.props.playlistInfos.name}</H2>
            <DivplaylistMap>
                <Label>Nome: </Label>
                <Input placeholder="EX: 'chop suey'" onKeyDown={this.onKeyDown} value={this.state.newTrackName} onChange={this.onChangeNewTrackName}/>
                <Label>Artistas: </Label>
                <Input placeholder="EX: 'SOAD'" onKeyDown={this.onKeyDown} value={this.state.newTrackArtist} onChange={this.onChangeNewTrackArtist}/>
                <Label>URL: </Label>
                <Input placeholder="EX: 'https://youtu.be/CSvFpBOe8eY'" onKeyDown={this.onKeyDown} value={this.state.newTrackURL} onChange={this.onChangeNewTrackURL}/>
            <ButtonAddPlaylist onClick={()=>this.onClickAddMusica(this.props.playlistInfos, {name: this.state.newTrackName,
            artist: this.state.newTrackArtist, url: this.state.newTrackURL}
                )}>add música a playlist</ButtonAddPlaylist>
            </DivplaylistMap>
        </div>
        </>

        return <MainDiv>
        <Div>
            {this.props.playlistInfos.name  && playlist}
            <H3>Musicas</H3>
        {this.props.playlistInfos.tracks && this.props.playlistInfos.tracks.length>0 && 
        this.props.playlistInfos.tracks.map((track)=>{
            return <DivMusicasMap key={track.id}>
                <div>    
                <Span>{track.name} - {track.artist}</Span>

                <ReactAudioPlayer src={track.url} controls/>
                
                 </div>
                 <ButtonRemoverMusica onClick={()=>this.removerMusicaDaPlaylist(this.props.playlistInfos,track.id)}>
                     X
                     </ButtonRemoverMusica>
            </DivMusicasMap>
        })}
        </Div>
        </MainDiv>
    }
}

export default PlaylistInfos