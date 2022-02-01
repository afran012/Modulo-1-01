import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from './context/UserContext'

const Login = () => {

    const [form, setForm] = useState({
        nombre: 'Susana',
        apellido: 'Torres'
    })

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h1>Login</h1>
            <Button onClick={() => setUser(form)}>Login</Button>
        </div>
    )
}

export default Login
