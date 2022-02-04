import { types } from "../types/types";

const initialState = {
     count: 0
}

export const reducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case types.increment:
            return{
                count: state.count + action.payload
            }
        case types.decrement:
            return{
                count: state.count - action.payload
            }
        case types.reset:
            return{
                count: action.payload
            }
           
        default:
            return state
    }
}
