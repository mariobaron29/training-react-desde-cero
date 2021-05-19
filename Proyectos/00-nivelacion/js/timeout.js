const evaluar = () => {
    const edad = prompt("Cuál es tu edad?");

    if(edad < 18 ){
        alert("menor de edad");
    }else{
        alert("Mayor de edad");
    }
}

setTimeout(evaluar, 2000);