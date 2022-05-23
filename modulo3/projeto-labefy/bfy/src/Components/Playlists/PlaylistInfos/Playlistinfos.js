import React from "react";
import styled from "styled-components"

const MainDiv = styled.div`
display: flex;
flex-direction: column;
`

class PlaylistInfos extends React.Component{
    state = {

    }

    render(){
        return <MainDiv>
        
        
        {this.props.playlistInfos.name  && <div>{this.props.playlistInfos.name}</div>}
        {this.props.playlistInfos.id  && <div>{this.props.playlistInfos.id}</div>}
        {this.props.playlistInfos.tracks && this.props.playlistInfos.tracks.length>0 && <div>{this.props.playlistInfos.tracks[0].name}</div>}
        </MainDiv>
    }
}

export default PlaylistInfos