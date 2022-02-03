import { Button, Link } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../actions/AuthAction';
import { AuthContext } from '../context/authContext'


const NavLogin = () => {

    const { dispatch } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }


  return (<div>

    <Link
    as={NavLink}
    to="/home"
    px={2}
    fontSize="20px"
    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
>
    Home</Link>
<Link
    as={NavLink}
    to="/counter"
    px={2}
    fontSize="20px"
    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
>
    Counter</Link>
<Link
    as={NavLink}
    to="/profile"
    px={2}
    fontSize="20px"
    style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
>
    Profile</Link>
<Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogout}>Logout</Button>
    
    </div>);
};

export default NavLogin;
