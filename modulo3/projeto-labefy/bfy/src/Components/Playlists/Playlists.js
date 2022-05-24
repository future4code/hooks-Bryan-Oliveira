import React from "react"
import axios from "axios"
import styled from "styled-components"
import PlaylistInfos from "./PlaylistInfos/Playlistinfos"

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
min-height: 100vh;
background-color: #EFF4F7;
color: #073944;
`

const Div = styled.div`
display: flex;
align-self: stretch;
justify-content: space-between;
margin-top: 40px;
`

const PlaylistsDiv= styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #39A2DB;
overflow-y: scroll;
max-height: 400px;

margin-left: 15px;
padding: 0 15px 0 15px;
border-radius: 3px;
box-shadow: 0 0 0.1em 0.1em #073944;
`

const PlaylistsDivMap = styled.div`
align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #ffffff;
box-shadow: 0 0 0.1em 0.1em #073944;
margin-bottom: 30px;
padding: 15px;
border-radius: 3px;
div{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
`
const Span = styled.span`
font-weight: 800;
cursor: pointer;
`
const Input = styled.input`
background-color: transparent;
border-radius: 3px;
`

const Button = styled.button`
background-color: transparent;
border-radius: 3px;
color: #073944;
margin-left: 20px;
padding: 3px;
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

class Playlists extends React.Component{
    state = {
        namePlaylist: '',
        playlists: [],
        playlistsEncontradas: [],
        playlistInfos: {},

    }

    headers = {
        headers:{
            Authorization: "bryan-fernandes-hooks"
        }
    }




    createPlaylist = ()=>{
        const createPlaylistURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios.post(createPlaylistURL, {
            name: this.state.namePlaylist
        }, this.headers)
        .then((response)=>{
            alert("Playlist criada com sucesso!")
            this.setState({namePlaylist: ''})
            this.getAllPlaylists()
        }).catch((error)=>{
            alert("não foi possível criar a playlist")
        })
    }

    getAllPlaylists = ()=>{
        const getAllPlaylistsURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(getAllPlaylistsURL, this.headers)
        .then((response)=>{
            this.setState({playlists: response.data.result.list})
        }).catch((error)=>{
            alert("não foi possível pegar as playlists")
        })
    }

    deletePlaylist = (playlistId)=>{
        const deletePlaylistURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

        axios.delete((`${deletePlaylistURL}${playlistId}`), this.headers)
        .then((response)=>{
            alert("playlist deletada com sucesso!")
            this.getAllPlaylists()
        }).catch((error)=>{
            alert("não foi possível deletar a playlist")
        })
    }

    searchPlaylist = (playlistName)=>{
        const searchPlaylistURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name="
        axios.get(`${searchPlaylistURL}${playlistName}`, this.headers)
        .then((response)=>{
            alert("buscou playlist")
            this.setState ({playlistsEncontradas: response.data.result.list})
        }).catch((error)=>{
            alert("erro na busca de playlist")
        })
    }

    getAllPlaylistTracks = (playlistId)=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, this.headers)
        .then((response)=>{
            this.setState ({playlistInfos: {...this.state.playlistInfos,tracks: response.data.result.tracks}})
        }).catch((error)=>{
            alert("erro em obter músicas da playlist")
        })
    }

    addTrackToPlaylist = (playlist, trackInfo)=>{
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,{
            name: trackInfo.name,
            artist: trackInfo.artist,
            url: trackInfo.url
        }, this.headers).then((response)=>{
            alert(`${trackInfo.name} foi adicionanda a playlist`)
            this.detalhesPlaylist(playlist)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    removeTrackFromPlaylist =(playlist, trackId)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks/${trackId}`,
        this.headers).then((response)=>{
            alert("musica deletada com sucesso!")
            this.detalhesPlaylist(playlist)
        }).catch((error)=>{
            alert("não foi possível deletar a música")
        })
    }

    detalhesPlaylist = (playlist)=>{
        this.getAllPlaylistTracks(playlist.id)
        this.setState({playlistInfos: {...this.state.playlistInfos, ...playlist}})
    }


    onChangeNamePlaylist = (event)=>{
        this.setState({namePlaylist: event.target.value})
    }

    componentDidMount(){
        this.getAllPlaylists()
    }
    render(){

        const playlistsMap = this.state.playlists.map((playlist)=>{
            return <PlaylistsDivMap key={playlist.id}>
                <div>
                <Span onClick={()=>this.detalhesPlaylist(playlist)}>{playlist.name}</Span>
                <Button onClick={()=>this.deletePlaylist(playlist.id)}>Deletar Playlist</Button>
                </div>
                {/* <ButtonDetalhes onClick={()=>this.detalhesPlaylist(playlist)}>detalhes</ButtonDetalhes> */}
            </PlaylistsDivMap>

})

        return<MainDiv>
            <div>

        <Input value={this.state.namePlaylist} onChange={this.onChangeNamePlaylist}/>
        <Button onClick={this.createPlaylist}>Criar Playlist</Button>
            </div>
            <Div>
        <PlaylistsDiv>
        <h2>Playlists</h2>
        {playlistsMap}
        </PlaylistsDiv>
        {console.log(this.state.playlistInfos)}
        <PlaylistInfos 
        playlistInfos={this.state.playlistInfos} 
        addTrackToPlaylist={this.addTrackToPlaylist}
        removeTrackFromPlaylist={this.removeTrackFromPlaylist}/>
            </Div>
        </MainDiv>
    }
}

export default Playlists