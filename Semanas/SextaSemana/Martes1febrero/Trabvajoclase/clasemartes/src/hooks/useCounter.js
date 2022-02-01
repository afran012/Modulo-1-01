import { useState } from 'react'

const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value)

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return {
        counter,
        handleSumar,
        handleReset,
        handleRestar
    }
}

export default useCounter