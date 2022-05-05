import React from 'react'
import styled from 'styled-components'
import Etapa2 from './Etapa2/Etapa2'

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.h1`
font-size: 25px;
`

const Label = styled.label`
margin: 10px 0;
font-weight: 600;
font-size: 20px;
display: flex;
`
const Input = styled.input`
width: 250px;
`
const Button = styled.button`
margin-top: 10px;
`

class Formulario extends React.Component {
    
    state = {
        etapaAtual: 1,
        value: 'Ensino Medio Incompleto',
        mensagem:''
      }
    
      //muda o valor da tag select
    onChangeEscolhendoNivelDeFormacao = (event)=> {
      this.setState({value: `${event.target.value}`});  
      }

      //avaça as etapas
      onclickAvancandoEtapa = ()=>{
        this.setState({etapaAtual: this.state.etapaAtual + 1})
      }

    render(){
        const etapa1 =<> <H1>ETAPA 1 - DADOS GERAIS</H1>
        <Div>
            <Label>1.Qual o seu nome?</Label>
            <Input type="text"></Input>
        </Div>
        <Div>
            <Label>2.Qual a sua idade?</Label>
            <Input type="number"></Input>
        </Div>
        <Div>
            <Label>3.Qual o seu email?</Label>
            <Input type="email"></Input>
        </Div>

        <Div>
            <Label>4.Qual a sua formação?</Label>
            <select value={this.state.value}
            onChange={this.onChangeEscolhendoNivelDeFormacao}
            >
                <option value="Ensino Medio Incompleto" selected={this.selecionandoEnsinoMedio}>Ensino Médio Incompleto</option>
                <option value="Ensino Medio Completo" selected={this.selecionandoEnsinoMedio}>Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto" selected={this.selecionandoEnsinoSuperior}>Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo" selected={this.selecionandoEnsinoSuperior}>Ensino Superior Completo</option>
            </select>
        </Div>
        </>

        const etapa3 = <Div>
            <H1>O FORMULÁRIO ACABOU</H1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Div>

        return <Div>
            {/* etapa1 */}
            {this.state.etapaAtual ===1 && etapa1}

            {/* estapa2 */}
            {this.state.etapaAtual ===2 && <Etapa2 formacao={this.state.value}/>}
           
            {/* etapa 3 */}
            {this.state.etapaAtual===3 && etapa3}
            {this.state.etapaAtual===3 || <Button onClick={this.onclickAvancandoEtapa}>Proxima Etapa</Button>}
            

        </Div>
    }

}
export default Formulario