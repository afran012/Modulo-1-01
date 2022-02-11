import { types } from "../types/types"



export const reducerForm = (state= {},action) => {

    switch (action.type) {
        case types.registro:
            return{
                form: action.payload
            }
          
    
        default:
            return state;
            
    }
   
}
