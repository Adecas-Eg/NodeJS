const fs = require("node:fs/promises"); // apartidir de node 16 se recomienda ponmer el prefijo node

//manera asincronica
console.log("================================ Leyendo");



//promeswas codigo asincrono
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log(text); //devuelve un bite tenemos que convertirlo agregando la codificacion utf-8
});
//callback tarea que se ejecuta cuando una yya esta terminada

console.log("hacer cosas mientras lee el archivo");

console.log("================================ Leyendo 2");

const text2 = fs.readFile("./arcchivo2.txt", "utf-8").then((text) => {
  console.log(text); //devuelve un bite tenemos que convertirlo agregando la codificacion utf-8
});
