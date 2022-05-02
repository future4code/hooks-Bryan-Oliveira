import './App.css';
import InputsParaEnviarMsg from './components/InputsParaEnviarMsg/InputsParaEnviarMsg'
import TelaDeMensagens from './components/TelaDeMensagens/TelaDeMensagens';
import styled from 'styled-components';

function App() {
  const Tela = styled.div`
  margin-top: 20px;
  `
  return (
    <Tela className="App">
      <TelaDeMensagens/>
    </Tela>
  );
}

export default App;
