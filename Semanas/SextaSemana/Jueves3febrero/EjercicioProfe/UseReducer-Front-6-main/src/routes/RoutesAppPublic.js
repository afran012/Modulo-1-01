import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactenos from '../components/Contactenos'
import Counter from '../components/Counter'
import Home from '../components/Home'
import LandingPage from '../components/LandingPage'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'

const RoutesAppPublic = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Contactenos" element={<Contactenos/>} />
                <Route path="/LandingPage" element={<LandingPage/>} />
            </Routes>
        </>
    )
}
export default RoutesAppPublic;
