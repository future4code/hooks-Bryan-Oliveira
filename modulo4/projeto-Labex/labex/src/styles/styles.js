import styled from 'styled-components'

const gradient = 'linear-gradient(45deg,#ffdd00, #fbb034)'
const orange = '#ed5a13'
const orangeLight = 'rgb(237,90,19,0.5)'
const black = 'rgb(17,17,17)'
const blackLight = 'rgb(17,17,17, 0.5)'
const blackier = 'rgb(0,0,0)'
export const defaultBorderRadius = '5px'
export const roundBorderRadius = '10px'
const blackLightier = 'rgb(43,43,43, 0.7)'
const white = '#fff'
const whitesmoke = 'whitesmoke'
const borderThin = '1px'
const borderMedium = '3px'
const borderThick = '5px'

// themes
export const lightTheme = {
    type: 'light',
    background: white,
    titles: blackier,
    text: black,
    subTitle: orange,
    border: black,
    hover: blackLightier,
    subText: blackLight,
    dataText: orange,
  }
  
  export const darkTheme = {
    type: 'dark',
    background: black,
    titles: white,
    text: whitesmoke,
    subTitle: orange,
    border: white,
    hover: whitesmoke,
    subText: 'lightgray',
    dataText: orange,
  }

export const FluxoryButton = styled.button`
background-color: transparent;
color: ${({ theme }) => theme.text};
cursor: pointer;
border:${borderMedium} solid transparent;
transition: 300ms;
padding: 2px 7px;

&:hover{
  transition: 300ms;
  border-bottom:${borderMedium} solid ${orange};

}
`

export const PageDiv = styled.div`
border: ${borderMedium} solid ${orange};
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

export const SubTitle = styled.h2`
color: ${({ theme }) => theme.subTitle}
`

export const Text = styled.span`
color: ${({ theme }) => theme.text};
`

export const SubText = styled.span`
color: ${({ theme }) => theme.dataText};
`

export const Card = styled.div`
border: ${borderThin} solid ${({ theme }) => theme.border};
transition: 500ms;
border-radius: ${defaultBorderRadius};
padding: 15px;
`

export const InputsText = styled.input`
background-color: transparent;
color: ${({ theme }) => theme.text};
cursor: text;
border-radius: ${defaultBorderRadius};
border: 2px solid ${({ theme }) => theme.border};
padding: 5px 10px;

&:hover{
    transition: 300ms;
    border-color: ${orange};
}
`

export const SubmitButton = styled.button`
background-color: ${orange};
color: ${({ theme }) => theme.text};
font-weight: 600;
cursor: pointer;
border-radius: ${roundBorderRadius};

transition: 300ms;
padding: 5px 10px;

&:hover{
    transition: 300ms;
    background-color: ${blackLightier};
    color: ${orange};
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
border: ${borderMedium} solid ${({theme}) => theme.border};
border-radius: ${roundBorderRadius};
padding: 25px;
justify-content: center;

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}

input:required:invalid{
  border-color: red;
}

`

export const Select = styled.select`
background-color: transparent;
color: ${({ theme }) => theme.dataText};
border: 2px solid ${({ theme }) => theme.border};
padding: 5px 10px;
border-radius: ${defaultBorderRadius};
`
export const Option = styled.option`
background-color: transparent;
color: ${({ theme }) => theme.dataText}
`

export const DarkMode = styled.button`
align-self: flex-end;
margin-right: 30px;
object-fit: cover;
background-color: transparent;
cursor: pointer;
border: none;

width: 50px;
height: 50px;
`

export const IconMode = styled.img`
height: 100%;
width: 100%;
`
export const RequestLoading = styled.div`

@-webkit-keyframes waterfall {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-250%);
            transform: translateY(-250%); }
  40%,
  60% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  100% {
    opacity: 0;
    -webkit-transform: translateY(250%);
            transform: translateY(250%); } }

@keyframes waterfall {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-250%);
            transform: translateY(-250%); }
  40%,
  60% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  100% {
    opacity: 0;
    -webkit-transform: translateY(250%);
            transform: translateY(250%); } }


  div{-webkit-animation: waterfall 500ms infinite;
          animation: waterfall 500ms infinite;
  background-color: ${({ theme }) => theme.titles};
  height: 20px;
  left: 50%;
  margin-top: -10px;
  opacity: 0;
  position: absolute;
  top: 50%;
  width: 20px; 
  
  }

  div:nth-of-type(1) {
    -webkit-animation-delay: 100ms;
            animation-delay: 100ms;
    margin-left: -10px; }
  
  div:nth-of-type(2) {
    -webkit-animation-delay: 200ms;
            animation-delay: 200ms;
    margin-left: 15px; }
  
  div:nth-of-type(3) {
    -webkit-animation-delay: 300ms;
            animation-delay: 300ms;
    margin-left: -35px; }
  
  div:nth-of-type(4) {
    -webkit-animation-delay: 400ms;
            animation-delay: 400ms;
    margin-left: 40px; }
  
  div:nth-of-type(5) {
    -webkit-animation-delay: 450ms;
            animation-delay: 450ms;
    margin-left: -60px; }
`

export const PostPutDeleteLoading = styled.div`
@-webkit-keyframes scan {
  0% {
    background-position: -5px 0; }
  50% {
    background-position: 40px 0; }
  100% {
    background-position: 40px 50px; } }
@keyframes scan {
  0% {
    background-position: -5px 0; }
  50% {
    background-position: 40px 0; }
  100% {
    background-position: 40px 50px; } }

position: absolute;
/* top: 50vh;
left: 50vw; */

width: 100vw;
height: 100vh;

background-color: rgb(255,255,255, 0.2);

&:before {
  position: fixed;
  top: calc(50vh - 50px);
  left: calc(50vw - 50px);
  -webkit-animation: scan 1s infinite;
          animation: scan 1s infinite;
  background: -webkit-gradient(linear, left top, right top, color-stop(20%, orange), color-stop(20%, transparent), to(transparent)), -webkit-gradient(linear, left bottom, left top, color-stop(20%, orange), color-stop(20%, transparent), to(transparent));
  background: linear-gradient(90deg, orange 20%, transparent 20%, transparent), linear-gradient(0deg, orange 20%, transparent 20%, transparent);
  background-size: 50px 50px;
  border: 5px solid orange;
  content: '';
  height: 50px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  width: 50px; }
`
