import React from 'react'

const Dato = ({value}) => { 
    return (
        <p>
            {value}
        </p>
    )
}

export default React.memo(Dato)// React.memo() es una funcion que recibe todo el componente y lo mntiene en memoria
