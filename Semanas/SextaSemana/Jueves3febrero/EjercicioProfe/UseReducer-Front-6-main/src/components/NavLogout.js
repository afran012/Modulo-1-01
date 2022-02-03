import {   Link } from '@chakra-ui/react'
import React  from 'react'
import { NavLink  } from 'react-router-dom'

const NavLogout = () => {
  return ( 
      
    <>
    <Link
    as={NavLink}
    to="/login"
    px={2}
    fontSize="20px"
    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
    >
Login</Link>
    <Link
    as={NavLink}
    to="/login/Contactenos"
    px={2}
    fontSize="20px"
    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
>
Contactenos</Link>
    <Link
    as={NavLink}
    to="/login/LandingPage"
    px={2}
    fontSize="20px"
    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
>
LandingPage</Link>
    
    </>
   
  );
};

export default NavLogout;
