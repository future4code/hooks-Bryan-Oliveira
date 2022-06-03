import axios from "axios"

//lista de matches
export const matches = []

//perfil para dar like ou deslike
export let profileToChose = {}

//endpoints das requisições
export const getProfileToChooseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
const getMatchesURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
const ChoosePersonURl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"
const clearURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"


//requisições:

export const getProfileToChoose = ()=>{
    axios.get(getProfileToChooseURL)
.then((response)=>{
profileToChose = response.data.profile
console.log(profileToChose)}
).catch((error)=>{
    console.log(error)
})
}

export const getMatches = ()=>{
    axios.get(getMatchesURL)
    .then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
}

export const ChoosePerson = (id , choice)=>{
    axios.post(ChoosePersonURl, {id: id, choice: choice})
    .then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
}

export const clear = ()=>{
    axios.put(clearURL)
}