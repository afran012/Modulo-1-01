import { types } from "../types/types";

export const increment = ()=> {
    return{
        type: types.increment,
        payload: 1
    }

};

export const decrement = ()=> {
    return{
        type: types.decrement,
        payload: 1
    }

};

export const reset = ()=> {
    return{
        type: types.reset
    }

};