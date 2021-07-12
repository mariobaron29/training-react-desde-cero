export const operaciones = (numeros, setNumeros) => {
    const {numero1, numero2} = numeros;

    const handleChange = (e) => {
        setNumeros(
            {
                ...numeros,
                [e.target.name]: parseFloat(e.target.value)                
            })
    }

    const suma = () => numero1 + numero2

    const resta = () => numero1 - numero2

    const multiplica = () => numero1 * numero2

    const divide = () => numero1 / numero2

    return {handleChange, suma, resta, multiplica, divide, numero1, numero2}
}

