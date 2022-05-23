import React from "react"
import axios from "axios"
import styled from "styled-components"
import PlaylistInfos from "./PlaylistInfos/Playlistinfos"

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const Div = styled.div`
display: flex;
align-self: stretch;
`

const PlaylistsDiv= styled.div`
display: flex;
flex-direction: column;
`

const Input = styled.input`
background-color: transparent;
border-radius: 3px;
`

const Button = styled.button`
background-color: transparent;
border-radius: 3px;
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

    addTrackToPlaylist = (playlistId)=>{
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,{
            name: "teste",
            artist: "teste",
            url: "google.com"
        }, this.headers).then((response)=>{
            alert("teste deu certo").catch((error)=>{
                alert("teste deu errado")
            })
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
            return <div key={playlist.id}>
                <div>
                <span>{playlist.name}</span>
                <Button onClick={()=>this.deletePlaylist(playlist.id)}>Deletar Playlist</Button>
                </div>
                <button onClick={()=>this.detalhesPlaylist(playlist)}>detalhes</button>
            </div>

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
        <PlaylistInfos playlistInfos={this.state.playlistInfos}/>
        {/* {this.state.playlistTracks && playlistTracksMap} */}
            </Div>
        </MainDiv>
    }
}

export default Playlists