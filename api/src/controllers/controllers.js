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
    const infoAll = allInfo.map(e =>{
        return (p={
            fixture : {
                id : e.fixture.id,
                date: e.fixture.date
            },
            league : {
                id: e.league.id,
                name: e.league.name,
                country: e.league.country,
                logo: e.league.logo
            },
            teams:{
                home :{
                    id : e.teams.home.id,
                    name: e.teams.home.name,
                    logo: e.teams.home.logo
                },
                away :{
                    id : e.teams.away.id,
                    name: e.teams.away.name,
                    logo: e.teams.away.logo
                }
            }
        })
    })
    
      return infoAll
      
} catch (error) {
        console.log(error)
    }
}

const liveFixture= async () =>{
    let fixturesLive = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/fixtures',
        params: {live: 'all'},
        headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
        }
    };

    try {
    let info = await axios.request(fixturesLive)
    let allInfo = info.data.response
    
    const infoAll = allInfo.map(e =>{
        return (p={
            fixture : {
                id : e.fixture.id,
                date: e.fixture.date
            },
            league : {
                id: e.league.id,
                name: e.league.name,
                country: e.league.country,
                logo: e.league.logo
            },
            teams:{
                home :{
                    id : e.teams.home.id,
                    name: e.teams.home.name,
                    logo: e.teams.home.logo
                },
                away :{
                    id : e.teams.away.id,
                    name: e.teams.away.name,
                    logo: e.teams.away.logo
                }
            }
        })
    })
    
      return infoAll
} catch (error) {
        console.log(error)
    }
}

const lastFixtures = async () =>{
    let fixturesAll = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/fixtures',
        params: {last: 10},
        headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
        }
    };

    try {
    let info = await axios.request(fixturesAll)
    let allInfo = info.data.response   
    const infoAll = allInfo.map(e =>{
        return (p={
            fixture : {
                id : e.fixture.id,
                date: e.fixture.date
            },
            league : {
                id: e.league.id,
                name: e.league.name,
                country: e.league.country,
                logo: e.league.logo
            },
            teams:{
                home :{
                    id : e.teams.home.id,
                    name: e.teams.home.name,
                    logo: e.teams.home.logo
                },
                away :{
                    id : e.teams.away.id,
                    name: e.teams.away.name,
                    logo: e.teams.away.logo
                }
            }
        })
    })
    
      return infoAll
      
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


const headToHeadAll = async (id) =>{
    
    let headTohead = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/fixtures/headtohead',
        params: {h2h: id },
        headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
      }
    }

    try {
        let head = await axios.request(headTohead)
        let info = head.data.response

        let allInfo = info.map(e =>{
            return (team = {
                fixture:{
                    id: e.fixture.id,
                    date: e.fixture.date
                },
                league:{
                    id: e.league.id,
                    name: e.league.name,
                    country: e.league.country,
                    logo: e.league.logo
                },
                teams:{
                    home:{
                        id: e.teams.home.id,
                        name: e.teams.home.name,
                        logo: e.teams.home.logo
                    },
                    away:{
                        id: e.teams.away.id,
                        name: e.teams.home.name,
                        logo: e.teams.away.logo
                    }
                },
                goals:{
                    home: e.goals.home,
                    away: e.goals.away
                }
            })
        })
         return allInfo
    } catch (error) {
        console.log(error)
    }
}

const statictis = async (fixture)=>{
    try {
        let stac ={
            method: 'GET',
            url: 'https://v3.football.api-sports.io/fixtures/statistics',
            params: {fixture: fixture},
            headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
            }
        }
        let statiscsAll = await axios.request(stac)
        console.log(statiscsAll.data.response)
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
            params: {fixture: fixture},
            headers: {
              'x-rapidapi-host': 'v3.football.api-sports.io',
              'x-rapidapi-key': 'd51989f6f2f84618961b02300c6a0feb'
            }
        }

        let allEvent = await axios.request(e)
        return allEvent.data.response
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    fixtures,
    timezone,
    headToHeadAll,
    statictis,
    event,
    liveFixture,
    lastFixtures
}