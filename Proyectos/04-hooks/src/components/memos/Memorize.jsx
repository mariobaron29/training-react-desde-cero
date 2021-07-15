import {useState, useMemo, useCallback} from 'react'
import Dato from './Dato'
import Btn from './Btn'

const Memorize = () => {

    const [counter, setCounter] = useState(5)
    const [view, setView] = useState(true)

    /* const pesado = (iter) => {
        for (let i = 0; i < iter; i++) {
            console.log("procesando")
        }

        return "Fin de procesamiento."
    } */

    /* const pesadoMemo = useMemo(() => pesado(counter), [counter]) */


    /* const add = () => {
        console.log("Add")
        setCounter(counter + 1)
    } */

    // De esta manera se memoriza la función de manera que unicamente se recarga, si la función cambia.
    // adicionalmente, se debe memorizar el componente también si no queremos que se recargue al actualizar el contador
    const addUseCallback = useCallback(
        () => {
            console.log("Add Callback")
            setCounter((actual) => actual + 1)
    },[setCounter])

    /* const handleClick = () => {
        setCounter(counter + 1)
    } */

    return (
        <>
            <h1>Memorizes: <Dato value = {counter}/></h1>
            <hr />
            {/* {pesadoMemo} */}
            <Btn add={ addUseCallback }/>
            <button onClick = {() => setView(!view)}> Ver/Quitar</button>
        </>
    )
}

export default Memorize
