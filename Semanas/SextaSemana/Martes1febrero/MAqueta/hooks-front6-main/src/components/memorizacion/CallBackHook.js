import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    console.log('Me volví a generar');

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter])

    // const increment = (num) => {
    //     setCounter(counter + num)
    // }

    return (
        <div>
            <h1>UseCallBack: {counter}</h1>
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallBackHook
