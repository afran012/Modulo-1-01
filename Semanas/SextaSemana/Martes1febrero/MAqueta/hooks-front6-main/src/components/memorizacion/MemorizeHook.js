import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { procesoPesado } from '../../helpers/procesoPesado'
import useCounter from '../../hooks/useCounter'
import Small from './Small'

const MemorizeHook = () => {

    const { counter, handleSumar } = useCounter()
    const [show, setShow] = useState(true)

    const memorizacion = useMemo(() => procesoPesado(500), [counter])

    return (
        <div>
            <h1>Contador: <Small value={counter} /></h1>
            <p>{memorizacion}</p>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={() => setShow(!show)} >Show/Hide {JSON.stringify(show)}</Button>
        </div>
    )
}

export default MemorizeHook
