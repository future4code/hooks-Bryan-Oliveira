import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddTarefas from './components/AddTarefa/AddTarefas';
import styled from 'styled-components'

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <AddTarefas/>
      </div>
    );
  }
    
}

export default App;
