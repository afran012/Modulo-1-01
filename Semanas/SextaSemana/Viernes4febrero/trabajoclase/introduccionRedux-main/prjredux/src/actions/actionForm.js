import { types } from "../types/types"


 export const formSincrono = (data) => {
    return{
        type: types.registro,
        payload: data
    }
} 