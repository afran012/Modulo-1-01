import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactenos from '../components/Contactenos'
import Counter from '../components/Counter'
import Home from '../components/Home'
import LandingPage from '../components/LandingPage'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'

const RoutesApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/Contactenos" element={<Contactenos/>} />
                <Route path="/LandingPage" element={<LandingPage/>} />
            </Routes>
        </>
    )
}

export default RoutesApp
