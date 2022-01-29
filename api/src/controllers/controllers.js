const axios = require('axios').default;

const fixtures = async () =>{
    let fixturesAll = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/fixtures',
        params: {next: 10},
        headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
        }
    };

    try {
    let info = await axios.request(fixturesAll)
    let allInfo = info.data.response   
    return allInfo
      
} catch (error) {
        console.log(error)
    }
}

const timezone = async () =>{
    let timezoneAll = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/timezone',
        headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
      }
    }

    try {
        let time = await axios.request(timezoneAll)
        return time.data.response
    } catch (error) {
        console.log(error)
    }
}


const headToHeadAll = async (idOne,idTwo) =>{
    
    let headTohead = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/fixtures/headtohead',
        params: {h2h: idOne-idTwo },
        headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
      }
    }

    try {
        let head = await axios.request(headTohead)
        console.log(head.data.response)
        return head.data.response
    } catch (error) {
        console.log(error)
    }
}

const statictis = async (team, fixture)=>{
    try {
        let stac ={
            method: 'GET',
            url: 'https://v3.football.api-sports.io/fixtures/statistics',
            qs: {team: team, fixture:fixture },
            headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
            }
        }
        let statiscsAll = await axios.request(stac)
        return statiscsAll.data.response
    } catch (error) {
        console.log(error)
    }
}

const event = async (fixture) => {
    try {
        let e = {
            method: 'GET',
            url: 'https://v3.football.api-sports.io/fixtures/events',
            qs: {fixture: fixture},
            headers: {
              'x-rapidapi-host': 'v3.football.api-sports.io',
              'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
            }
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    fixtures,
    timezone,
    headToHeadAll,
    statictis,
    event
}