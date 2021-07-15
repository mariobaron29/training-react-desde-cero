import {useState} from 'react'

const useCounter = (initialValue, range = 1) => {
    const[counter, setCounter] = useState(initialValue)
    
    const increment = () => {
        setCounter(counter + range)
    }

    const decrease = () => {
        setCounter(counter - range)
    }

    return [counter, increment, decrease]
}

export default useCounter
