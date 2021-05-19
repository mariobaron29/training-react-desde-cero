const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a < 0 || b < 0){
            reject("Esto no es válido");
        }else{
            resolve(a+b);
        }
    });
}

const result = sumar(-3, 5).then((res) => {document.write(res)}).catch((err) => {document.write(err)});

console.log(result);

document.write(result);