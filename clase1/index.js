const os = require('node:os')

console.log('Informacion del sistema Operatio');

console.log('-------------');

console.log('Nombre del sistema operativo', os.platform())

console.log('Version del sistema operativo ', os.release())

console.log(os.arch());

// console.log(os.cpus());

console.log(os.freemem() / 1025 / 1024)
console.log(os.uptime() / 60 / 60)