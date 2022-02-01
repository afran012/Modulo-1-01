import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Login from './Login'
import NavBar from './NavBar'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
