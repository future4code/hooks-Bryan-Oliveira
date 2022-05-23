import React from "react"


class Player extends React.Component{
  state = {
    play: false,
  }

audio = new Audio(this.props.track.url)

play = ()=>{
    if(!this.props.musicaTocando || this.state.play){
        this.setState({play: !this.state.play}, () => 
        {this.state.play ? this.audio.play() : this.audio.pause();})
        this.props.defineQualMuscaToca()
    } else{
        alert("pause a musica primeiro")
    }

}
  render(){

    return <>
    <button onClick={this.play}>{this.state.play?  'pause' : 'play'}</button>
    {console.log(this.audio)}
    </>

  }
}

export default Player;


/*cores:

#39A2DB -> azul claro
#073944 -> preto
#EFF4F7 -> cinza
#FFFFFF -> branco

*/