import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const pessoasPost = [{nome:"Bryan",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
{nome:"Pedro",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'}, 
{nome:"Miguel",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'}]

const pessoasPostMap = pessoasPost.map((pessoa) => {
  return  <Post
  nomeUsuario={pessoa.nome}
  fotoUsuario={pessoa.fotoUsuario}
  fotoPost={pessoa.fotoPost}
/>
})

class App extends React.Component {
  render() {
    return (
      <MainContainer>
       {pessoasPostMap}
      </MainContainer>
    );
  }
}

export default App;
