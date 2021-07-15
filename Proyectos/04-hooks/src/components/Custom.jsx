import { useState } from 'react'
import useCounter from '../hooks/useCounter'

const Custom = () => {

    const [counter, increment, decrease] = useCounter(29, 10)

    return (
        <>
            <h1>Custom hook: {counter}</h1>
            <hr />

            <button onClick={increment}>+1</button>
            <button onClick={decrease}>-1</button> 
        </>
    )
}

export default Custom
