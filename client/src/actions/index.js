import { ALL_TEAMS } from "./constantes";

export const allTeams = () =>{
    return function(dispatch){
        return fetch("https://v3.football.api-sports.io/teams?id=33", {
                "method": "GET",
                "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "61100d225020b015bb79f0c4609df2a5"
            }
        })
                .then(response => response.json())
                .then((json)=>{
                    dispatch({type:ALL_TEAMS, payload: json})
                })
                .catch(error => console.log(error))
        
    }
}