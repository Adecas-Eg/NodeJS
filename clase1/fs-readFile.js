const { log } = require("node:console");
const fs = require("node:fs"); // apartidir de node 16 se recomienda ponmer el prefijo node

console.log("================================ Leyendo")
const text = fs.readFileSync('./archivo.txt' , 'utf-8'); //devuelve un bite tenemos que convertirlo agregando la codificacion utf-8

console.log(text);


console.log("================================ Leyendo 2")

const text2 = fs.readFileSync('./arcchivo2.txt' , 'utf-8');

console.log(text2);
