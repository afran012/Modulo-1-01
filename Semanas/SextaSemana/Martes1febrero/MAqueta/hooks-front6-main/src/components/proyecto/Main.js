import React, { useState } from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './context/UserContext'

const Main = () => {

    const [user, setUser] = useState({
        nombre: 'Sara',
        apellido: "Bermudez"
    })

    return (
        <UserContext.Provider value={{ user, setUser }} >
            <AppRouter />
        </UserContext.Provider>
    )
}

export default Main
