import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/login"  element={<Login/>}/>
          <Route exact path="/registro"  element={<Registro/>}/>
        </Routes>
    </BrowserRouter>
  );
}