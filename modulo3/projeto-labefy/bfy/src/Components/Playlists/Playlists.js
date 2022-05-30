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
padding-top: 15px;

`

const Div = styled.div`
display: flex;
align-self: stretch;
justify-content: space-between;
margin-bottom: 15px;
align-items: center;

@media screen and (max-width:750px) {
    flex-direction: column;
}
`

const PlaylistsDiv= styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #0564c8;
overflow-y: scroll;
max-height: 400px;
margin-left: 15px;
padding: 0 15px 0 15px;
border-radius: 3px;
box-shadow: 0 0 0.1em 0.1em #073944;
animation: FadeIn 1s linear;

@keyframes FadeIn{
    from{ opacity: 0;
    }
    to{ opacity: 1; 
    }
}

&::-webkit-scrollbar-thumb{
    background-color: #fff;
} 
scrollbar-color: #fff transparent;

@media screen and (max-width:750px) {
 margin-bottom:30px;
 width: 95%;
 margin-left: 0;
 padding: 0;
}

@media screen and (max-width:450px) {

}

`

const PlaylistsDivMap = styled.div`
align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
color: #fff;
box-shadow: 0 0 0.1em 0.1em #073944;
margin-bottom: 30px;
padding: 15px;
border-radius: 3px;
text-align: center;
div{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

animation: FadeIn 1s linear;

@keyframes FadeIn{
    from{ opacity: 0;
    }
    to{ opacity: 1; 
    }
}

@media screen and (max-width:750px) {
    margin: 0 10px 30px 10px;
}

`
const Span = styled.span`
font-weight: 800;
cursor: pointer;
`
const InputBuscarPlaylist = styled.input`
border-radius: 10px;
padding: 3px 10px;
`

const Input = styled.input`
border-radius: 10px;
padding: 3px 10px;
`

const ButtonBuscarPlaylist = styled.button`
color: #fff;
margin-left: 20px;
border-radius: 10px;
padding: 3px 10px;
background-color: black;
cursor: pointer;
font-weight: 600;


-webkit-transition: background-color 300ms ease-out;
-ms-transition: background-color 300ms ease-out;
transition: background-color 300ms ease-out;

&:hover{
    background-color: transparent;
    -webkit-transition: background-color 300ms ease-out;
    -ms-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;
}

@media screen and (max-width:750px) {
    margin-bottom: 30px;
    margin-top: 15px;
    margin-left: 0;
}
`

const Button = styled.button`
background-color: transparent;
border-radius: 10px;
padding: 3px 10px;
color: #fff;
margin-left: 20px;
cursor: pointer;
font-weight: 600;
margin-right: 10px;


-webkit-transition: background-color 300ms ease-out;
-ms-transition: background-color 300ms ease-out;
transition: background-color 300ms ease-out;

&:hover{
    background-color: black;
    -webkit-transition: background-color 300ms ease-out;
    -ms-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;
}
`
const ButtonCirarPlaylist = styled.button`
background-color: transparent;
border-radius: 10px;
padding: 3px 10px;
color: #fff;
cursor: pointer;
font-weight: 600;
margin: 30px 10px;
align-self: flex-end;



-webkit-transition: background-color 300ms ease-out;
-ms-transition: background-color 300ms ease-out;
transition: background-color 300ms ease-out;

&:hover{
    background-color: black;
    -webkit-transition: background-color 300ms ease-out;
    -ms-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;
}
`

const H2 = styled.h2`
color: #fff;
`

const CriandoPlaylistDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 100%;
justify-content: space-evenly;
`

class Playlists extends React.Component{
    state = {
        namePlaylist: '',
        playlists: [],
        playlistInfos: {},
        buscarPlaylist: '',
        criandoPlaylist: false,

    }

    headers = {
        headers:{
            Authorization: `${this.props.usuario.nome}-${this.props.usuario.sobreNome}-hooks`
        }
    }




    createPlaylist = ()=>{
        const createPlaylistURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios.post(createPlaylistURL, {
            name: this.state.namePlaylist
        }, this.headers)
        .then((response)=>{
            alert("Playlist criada com sucesso!")
            this.setState({namePlaylist: '', criandoPlaylist: false})
            this.getAllPlaylists()
        }).catch((error)=>{
            alert("não foi possível criar a playlist")
            this.setState({criandoPlaylist: false})
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

    deletePlaylist = (playlistId, playlistName)=>{
        const deletePlaylistURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

        if(window.confirm(`realmente deseja deletar a playlist '${playlistName}'?`)){

            axios.delete((`${deletePlaylistURL}${playlistId}`), this.headers)
            .then((response)=>{
                alert("playlist deletada com sucesso!")
                this.getAllPlaylists()
            }).catch((error)=>{
                alert("não foi possível deletar a playlist")
            })
        }
    }

    searchPlaylist = (playlistName)=>{
        const searchPlaylistURL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name="
        axios.get(`${searchPlaylistURL}${playlistName}`, this.headers)
        .then((response)=>{
            console.log(response.data.result.playlist)
            this.setState ({playlists: response.data.result.playlist})
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

    onChangeInputBuscarPlaylist = (event)=>{
        this.setState({buscarPlaylist: event.target.value })
    }

    buscarPlaylist = (playlistName)=>{
        this.state.buscarPlaylist? this.searchPlaylist(playlistName) : this.getAllPlaylists()
    }

    onClickcriandoPlaylist = ()=>{
        this.setState({criandoPlaylist: true})
    }

    render(){

        const playlistsMap = this.state.playlists? this.state.playlists.map((playlist)=>{
            return <PlaylistsDivMap key={playlist.id}>
                <div>
                <Span onClick={()=>this.detalhesPlaylist(playlist)}>{playlist.name}</Span>
                <Button onClick={()=>this.deletePlaylist(playlist.id, playlist.name)}>Deletar Playlist</Button>
                </div>
            </PlaylistsDivMap> 

}) : "nenhuma playlist encontrada :/"

        const criandoPlaylist = <CriandoPlaylistDiv>
            <H2>Nova Playlist</H2>
            <Input value={this.state.namePlaylist} placeholder="nome da playlist" onChange={this.onChangeNamePlaylist}/>
        <ButtonCirarPlaylist onClick={this.createPlaylist}>Criar Playlist</ButtonCirarPlaylist>
        </CriandoPlaylistDiv>

        const playlistsDivContent = <>
        <H2>Playlists</H2>
        <ButtonCirarPlaylist onClick={this.onClickcriandoPlaylist}>Nova Playlist</ButtonCirarPlaylist>
       
        <Div>
        <InputBuscarPlaylist value={this.state.buscarPlaylist} placeholder="buscar playlist" onChange={this.onChangeInputBuscarPlaylist}/>
        <ButtonBuscarPlaylist onClick={()=>this.buscarPlaylist(this.state.buscarPlaylist)}>Buscar Playlist</ButtonBuscarPlaylist>
        </Div>
        <p>Clicque no nome de uma playlist para exibir suas informações</p>
        {playlistsMap}
        </>

        return<MainDiv>

            <Div>
        <PlaylistsDiv>
        {this.state.criandoPlaylist || playlistsDivContent}
        {this.state.criandoPlaylist && criandoPlaylist}
        </PlaylistsDiv>
        <PlaylistInfos 
        playlistInfos={this.state.playlistInfos} 
        addTrackToPlaylist={this.addTrackToPlaylist}
        removeTrackFromPlaylist={this.removeTrackFromPlaylist}/>
            </Div>
        </MainDiv>
    }
}

export default Playlists