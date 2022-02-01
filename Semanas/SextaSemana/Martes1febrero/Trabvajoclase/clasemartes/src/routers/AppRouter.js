import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';

import About from '../components/proyecto/About';
import Home from '../components/proyecto/Home';
import Login from '../components/proyecto/Login';
import NavBar from '../components/proyecto/NavBar';


export const AppRouter = () => {
    return (
        <Router>
                <NavBar />
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
        </Router>
    )
}
