const numeros = [1,2,3,4];
const [usuario1,,usuario3,] = ["Pepe", "Juan", "Lucía","María"];

document.write("<ul>");
for(numero in numeros){
    document.write("<li>");
    document.write(numero);
    document.write("</li>");
}
document.write("</ul>");

document.write("<ul>");
numeros.map((num, index) => {
    document.write("<li>"+num+" index: "+index+"</li>");
}
);
document.write("</ul>");

document.write(usuario1+" "+usuario3);



