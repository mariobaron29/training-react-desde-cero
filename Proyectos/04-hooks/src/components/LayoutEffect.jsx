import {useState, useLayoutEffect, useEffect} from 'react'

const LayoutEffect = () => {

    const [data, setData] = useState([])
    const [length, setLength] = useState(0)
    
    const newData = [
        {
            name: "Mario",
            email: "mariobaron@gmail.com"
        },
        {
            name: "Mario",
            email: "mariobaron@gmail.com"
        },
        {
            name: "Mario",
            email: "mariobaron@gmail.com"
        }
    ]

    useEffect(() => {
       setTimeout(() => {
            setData(newData)
        }, 5000)
    }, [])

    useLayoutEffect(() => {
        setLength(data.length)
    }, [data])

    return (
        <>
            <h1>useLayoutEffect</h1>
            <hr />
            <p>Valores: { length }</p>
        </>
    )
}

export default LayoutEffect
