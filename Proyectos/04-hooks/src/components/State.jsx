import React from 'react'
import { useState, useEffect } from 'react'

const State = () => {

    const [state, setState] = useState(0)

    // Ejemplo incrementa state en 1 cada 3 segs; esto genera error porque se crea un bucle infinito al re-renderizar el componente
    /* setInterval(() => {
        setState(state + 1)
        console.log(state)
    }, 3000); */

    // Ejemplo uso del useEffect
    useEffect(() => {
        //Este código sólo se ejecuta en la primera vez que se carga la página 
        console.log(state)
    }, [])
    const handleClick = () => {
        setState(state + 1)
    }

    return (
        <div className="container text-center">
            <h1>useEffect</h1>
            <hr/>
            Cuenta: {state}
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default State
