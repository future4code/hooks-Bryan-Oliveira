import React from "react";
import styled from "styled-components"
import Player from "./Player/Player";

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

class PlaylistInfos extends React.Component{
    state = {
        newTrackName: '',
        newTrackArtist:'',
        newTrackURL: '',
        musicaTocando: false,
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
        camposVazios.length===0 && this.props.addTrackToPlaylist(playlist, trackInfo)
    }

    defineQualMuscaToca = ()=>{
        this.setState({musicaTocando: !this.state.musicaTocando})
    }

    render(){
        const playlist = <>
        <div>
            <span>{this.props.playlistInfos.name}</span>
            <div>
                <label>Nome: </label>
                <input onKeyDown={this.onKeyDown} value={this.state.newTrackName} onChange={this.onChangeNewTrackName}/>
                <label>Artistas: </label>
                <input onKeyDown={this.onKeyDown} value={this.state.newTrackArtist} onChange={this.onChangeNewTrackArtist}/>
                <label>URL: </label>
                <input onKeyDown={this.onKeyDown} value={this.state.newTrackURL} onChange={this.onChangeNewTrackURL}/>
            <button onClick={()=>this.onClickAddMusica(this.props.playlistInfos, {name: this.state.newTrackName,
            artist: this.state.newTrackArtist, url: this.state.newTrackURL}
                )}>add música a playlist</button>
            </div>
            <div>
                aqui ficam as músicas
            </div>
        </div>
        </>

        return <MainDiv>
        <Div>
        {this.props.playlistInfos.name  && playlist}
        {this.props.playlistInfos.tracks && this.props.playlistInfos.tracks.length>0 && 
        this.props.playlistInfos.tracks.map((track)=>{
            return <div key={track.id}>
                <li>{track.name}</li>
                <Player musicaTocando={this.state.musicaTocando}
                 defineQualMuscaToca={this.defineQualMuscaToca} 
                 track={track}/>
                 <button onClick={()=>this.props.removeTrackFromPlaylist(this.props.playlistInfos,track.id)}>Remover música da playlist</button>
            </div>
        })}
        </Div>
        </MainDiv>
    }
}

export default PlaylistInfos