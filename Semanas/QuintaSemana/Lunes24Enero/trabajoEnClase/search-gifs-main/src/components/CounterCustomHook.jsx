import { useState } from 'react'

export const useCounter = (numero = 10) => {

    const [counter, setCounter] = useState(numero)

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return {
        counter,
        handleRestar,
        handleReset,
        handleSumar
    }
}
