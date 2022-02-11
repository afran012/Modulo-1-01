import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../actions/AuthAction'
import { AuthContext } from '../context/authContext'
import NavLogin from './NavLogin'
import NavLogout from './NavLogout'

const NavBar = () => {

    const { dispatch } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    /* Login
Contactenos
LandingPage */

    return (
        <Flex
            bg="tomato"
            w="100%"
            px={5}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="left" alignItems="center">
                <Image maxWidth="5%"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                    size={30}
                />
                <Text pl={3} color="white" fontSize="20px">
                    MyApp
                </Text>
            </Flex>
            <Box display="flex" justifyContent="space-around" alignItems="center">

               { user.logged ? <NavLogin/> : <NavLogout/>}

            </Box>
        </Flex >
    )
}

export default NavBar
