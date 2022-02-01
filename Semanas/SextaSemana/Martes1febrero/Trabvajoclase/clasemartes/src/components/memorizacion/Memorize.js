import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../hooks/useCounter'
import Small from './Small'

const Memorize = () => {

    const { counter, handleSumar } = useCounter()
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Contador: <Small value={counter} /></h1>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={() => setShow(!show)} >Show/Hide {JSON.stringify(show)}</Button>
        </div>
    )
}

export default Memorize
