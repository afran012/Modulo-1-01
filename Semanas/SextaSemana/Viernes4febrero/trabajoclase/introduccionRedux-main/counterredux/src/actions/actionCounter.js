import { types } from "../types/types"

export const actionIncrement = () => {
    return{
        type: types.increment,
        payload: 2
    }
}

export const actionDecrement = () => {
    return{
        type: types.decrement,
        payload: 1
    }
}

export const actionReset = () => {
    return{
        type: types.reset,
        payload: 0
    }
}