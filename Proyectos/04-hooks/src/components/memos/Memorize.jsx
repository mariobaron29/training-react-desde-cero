import {useState, useMemo, useCallback} from 'react'
import Dato from './Dato'
import Btn from './Btn'
import { useMemorizeApp } from '../../hooks/useMemorizeApp'

const Memorize = () => {
    const [counter, add, hide] = useMemorizeApp()
    
    return (
        <>
            <h1>Memorizes: <Dato value = { counter }/></h1>
            <hr />
            <Btn add = { add }/>
            <button onClick = { hide }> Ver/Quitar</button>
        </>
    )
}

export default Memorize
