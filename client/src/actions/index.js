import { FIXTURE_LIVE, FIXTURE_LAST, FIXTURE_NEXT, STATITICS, HEAD_TO_HEAD, EVENT } from "./constantes";

export const fixtureLive = () =>{
    return function (dispatch){
        return fetch('http://localhost:3001/fixtures')
                .then(response => response.json())
                .then((json) =>{
                    dispatch({type: FIXTURE_LIVE, payload : json})
                })
                .catch((error) => console.log(error))
    }
}

export const fixtureLast = () =>{
    return function (dispatch){
        return fetch('http://localhost:3001/fixtures/last')
                .then(response => response.json())
                .then((json) =>{
                    dispatch({type: FIXTURE_LAST, payload : json})
                })
                .catch((error) => console.log(error))
    }
}

export const fixtureNext = () =>{
    return function (dispatch){
        return fetch('http://localhost:3001/fixtures/next')
                .then(response => response.json())
                .then((json) =>{
                    dispatch({type: FIXTURE_NEXT, payload : json})
                })
                .catch((error) => console.log(error))
    }
}

export const statistics = (fixture) =>{
    return function (dispatch){
        return fetch(`http://localhost:3001/fixtures/statistics/${fixture}`)
                .then(response => response.json())
                .then((json) =>{
                    dispatch({type: STATITICS, payload : json})
                })
                .catch((error) => console.log(error))
    }
}

export const event = (fixture) =>{
    return function (dispatch){
        return fetch(`http://localhost:3001/fixtures/event/${fixture}`)
                .then(response => response.json())
                .then((json) =>{
                    dispatch({type: EVENT, payload : json})
                })
                .catch((error) => console.log(error))
    }
}

export const headToHeadAll = (id) =>{
    return function (dispatch){
        return fetch(`http://localhost:3001/fixtures/head/${id}`)
                .then(response => response.json())
                .then((json) =>{
                    dispatch({type: HEAD_TO_HEAD, payload : json})
                })
                .catch((error) => console.log(error))
    }
}