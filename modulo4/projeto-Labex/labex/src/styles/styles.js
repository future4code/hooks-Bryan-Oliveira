import styled from 'styled-components'


const gradient = 'linear-gradient(45deg,#ffdd00, #fbb034)'
const orange = '#ed5a13'
const orangeLight = 'rgb(237,90,19,0.5)'
const black = 'rgb(17,17,17)'
const blackLight = 'rgb(17,17,17, 0.5)'
const blackier = 'rgb(0,0,0)'
const defaultBorderRadius = '5px'
const blackLightier = 'rgb(43,43,43, 0.7)'
const white = '#fff'
const whitesmoke = 'whitesmoke'

// themes
export const lightTheme = {
    background: white,
    titles: blackier,
    text: black,
    subTitle: blackLight,
    border: black,
    hover: blackLightier,
    subText: blackLight,
  }
  
  export const darkTheme = {
    background: black,
    titles: white,
    text: whitesmoke,
    subTitle: orange,
    border: white,
    hover: whitesmoke,
    subText: 'lightgray',
  }

export const FluxoryButton = styled.button`
background-color: transparent;
color: ${({ theme }) => theme.text};
cursor: pointer;
border-radius: ${defaultBorderRadius};
border:1px solid ${({ theme }) => theme.border};

transition: 300ms;

&:hover{
    transition: 300ms;
    background-color: ${({ theme }) => theme.hover};
    color: ${orange};
}
`

export const PageDiv = styled.div`
border: 3px solid ${orange};
/* box-shadow: 0 0 5px 5px ${orangeLight}; */
background-color: transparent;
height: 450px;
width: 350px;
border-radius: 20px;
margin: auto;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;

align-items: center;
padding-top: 30px;

background-color: ${({ theme }) => theme.background};
`

export const Titles = styled.h1`
color: ${({ theme }) => theme.titles};
`

export const Text = styled.span`
color: ${({ theme }) => theme.text};
`

export const SubText = styled.span`
color: ${({ theme }) => theme.subText};
`

export const Card = styled.div`
border: ${orange};
`


