import './App.css';
import React from 'react';
import styled from 'styled-components';
import Formulario from './components/FormPrincipal';

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`



class App extends React.Component {
  state = {
    
  }


  render(){
    
    return <Div>
      <Formulario/>
    </Div>
  }
}

export default App;
