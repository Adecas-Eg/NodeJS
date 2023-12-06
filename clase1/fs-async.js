const fs = require("node:fs/promises"); // apartidir de node 16 se recomienda ponmer el prefijo node

console.log("================================ Leyendo")


const text = await fs.readFileSync('./archivo.txt' , 'utf-8');


console.log(text);


console.log("================================ Leyendo 2")

const text2 = await fs.readFileSync('./arcchivo2.txt' , 'utf-8');

console.log(text2);
