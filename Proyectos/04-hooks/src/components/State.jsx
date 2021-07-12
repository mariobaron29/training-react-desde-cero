import React from 'react'
import { useState } from 'react'

const State = () => {

    const [state, setState] = useState(0)

    // Ejemplo incrementa state en 1 cada 3 segs; esto genera error porque se crea un bucle infinito al re-renderizar el componente
    /* setInterval(() => {
        setState(state + 1)
        console.log(state)
    }, 3000); */

    return (
        <div className="container text-center">
            <h1>useState: {state}</h1>

            <hr/>
        </div>
    )
}

export default State
