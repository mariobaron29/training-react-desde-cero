import { useCallback, useState } from "react"

export const useMemorizeApp = () => {
    const [counter, setCounter] = useState(5)
    const [view, setView] = useState(true)

    // De esta manera se memoriza la función de manera que unicamente se recarga, si la función cambia.
    // adicionalmente, se debe memorizar el componente también si no queremos que se recargue al actualizar el contador
    const add = useCallback(
        () => {
            console.log("Add Callback")
            setCounter((actual) => actual + 1)
    },[setCounter])

    const hide = useCallback(
        () => {
            setView(!view)
        }, [setView],
    )

    return [counter, add, hide]
}
