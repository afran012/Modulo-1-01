import { createStore } from 'redux';
import { reducerForm } from '../reducers/reducerForm';

 export const store = createStore(
    reducerForm, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );