import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Counter from '../components/Counter';
//import {Login} from '../components/Login';

export const AppRouter = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Counter />}/>
          </Routes>
       </BrowserRouter>
    )
}
