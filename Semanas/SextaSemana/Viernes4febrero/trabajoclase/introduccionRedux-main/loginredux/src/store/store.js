import { createStore,combineReducers } from "redux";
import { reducerLogin } from "../reducers/reducerLogin";
import { counterReducer } from "../reducers/reducerCounter";
 

const reducers = combineReducers({
    login: reducerLogin,
    counter: counterReducer
})


export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)