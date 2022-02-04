import { 
BrowserRouter,
Routes,
Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Formulario } from "../components/Formulario";

export const AppRouters = () => {
    return (
        <BrowserRouter>
         <Navbar/>
          <Routes>
              <Route path="/" element={<Formulario/>}/>
          </Routes>
        </BrowserRouter>
    )
}
