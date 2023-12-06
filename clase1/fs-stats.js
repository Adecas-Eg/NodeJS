const fs = require('node:fs') // apartidir de node 16 se recomienda ponmer el prefijo node
// leer docuemnto  es monohil
// sincrono o asincrono
// ejemplo sincrono
// leeer archivo manera
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // su es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // directorio
  stats.size // tamaño
)
