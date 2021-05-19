const saludo = async () => {
    return "Hola Mundo";
    /*return new Promise((result, reject) => {
        resolve("Hol mundo");
    });*/
}

saludo().then((response) => {
    console.log(response)
});

const peticion = async() => {
    setTimeout(() => {
        const datos = {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        };
        console.log(datos);
    }, 2000);
}

peticion().then(console.log);