import { types } from "../types/types";

const initialState = {contador:0}

export const counterReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.increment:
            return {contador:state.contador+action.payload}
        case types.decrement:
            return {contador:state.contador-action.payload}
        case types.reset:
            return {contador:0}
        default:
            return state
    }
}