import { FIXTURE_LIVE, FIXTURE_LAST, FIXTURE_NEXT, STATITICS, HEAD_TO_HEAD, EVENT } from "../actions/constantes";

const initialState = {
    live: [],
    last:[],
    next:[],
    statitics:[],
    head: [],
    event: []
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case FIXTURE_LIVE:
            return{
                ...state,
                live : action.payload
            }
        case FIXTURE_LAST:
            return{
                ...state,
                last: action.payload
            }
        case FIXTURE_NEXT:
            return{
                ...state,
                next: action.payload
            }
        case STATITICS:
            return{
                ...state,
                statitics: action.payload
            }
        case HEAD_TO_HEAD:
            return{
                ...state,
                head: action.payload
            }
        case EVENT:
            return{
                ...state,
                event: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;