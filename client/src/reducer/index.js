import { ALL_TEAMS } from "../actions/constantes";

const initialState = {
    teams: [],
    
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ALL_TEAMS:
            return{
                ...state,
                teams : action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;