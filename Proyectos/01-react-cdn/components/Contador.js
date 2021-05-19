const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const aumentarContador = () => setContador(contador + 1);
    const disminuirContador = () => setContador(contador - 1);

    return (
    <div>
        <h1 className={contador > 0 ? "mayor" : "menor"} >Contador: {contador}</h1>
        <hr/>

        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={disminuirContador}>Disminuir</button>
    </div>
    

    )
}