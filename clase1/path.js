const { log } = require('node:console');
const path = require('node:path');


//unir rutas

//saber que tipo de separacion tienen el ssitema operativo

console.log(path.sep)

// unir rutas con path

const filePath =  path.join('content','subfolder','test-txt');

console.log(filePath);

//saber el nombre del fichero
const base = path.basename('/archivo.txt')

const basesinextension = path.basename('/archivo.txt','.txt')


console.log(base);

//extension

const extension = path.extname('image.jpg')
console.log(extension);