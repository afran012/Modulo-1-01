import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from './context/UserContext'

const About = () => {
    const { user, setUser } = useContext(UserContext)
    console.log(user);
    return (
        <div>
            <h1>{user.nombre}</h1>
            <h1>{user.apellido}</h1>
            <Button onClick={() => setUser({
                nombre: "Pepito",
                apellido: "Perez"
            })}>Cambiar estado</Button>
        </div>
    )
}

export default About
