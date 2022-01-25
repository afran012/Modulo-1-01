import React from 'react'
import { Button } from 'react-bootstrap'
import { useCounter } from './CounterCustomHook'

export const Counter = () => {

    const { counter, handleRestar, handleReset, handleSumar } = useCounter(20)

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <Button variant="primary" onClick={handleRestar}>Restar</Button>
            <Button variant="warning" onClick={handleReset}>Reset</Button>
            <Button variant="primary" onClick={handleSumar}>Sumar</Button>
        </div>
    )
}
