import axios from "axios"

//perfil para dar like ou deslike
export let profileToChose = {}

//matches
export let matchesResult = []

//endpoints das requisições
export const getProfileToChooseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bryan-fernandes-hooks/person"
const getMatchesURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bryan-fernandes-hooks/matches"
const ChoosePersonURl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bryan-fernandes-hooks/choose-person"
const clearURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bryan-fernandes-hooks/clear"


//requisições:

export const getProfileToChoose = ()=>{
    profileToChose = {}
axios.get(getProfileToChooseURL)
.then((response)=>{
    if(response.data.profile){
        profileToChose = response.data.profile
        console.log("profile" , profileToChose)
    }
console.log(response)
}
).catch((error)=>{
    console.log(error)
})
}

export const getMatches = ()=>{
    axios.get(getMatchesURL)
    .then((response)=>{
        matchesResult = [...response.data.matches]
    }).catch((error)=>{
        console.log(error)
    })
}

export const ChoosePerson = (id , choice)=>{
    axios.post(ChoosePersonURl, {id: id, choice: choice})
    .then((response)=>{
        console.log('is match',response.data.isMatch)
    }).catch((error)=>{
        console.log(error)
    })
}

export const clear = ()=>{
    axios.put(clearURL)
    setTimeout(()=>{
        window.location.reload()
    }, 1000)
}