//propiedades y metodos qu eda informacion cpn el proceso
//como argumentos de entrada

console.log(process.argv);

//controlar el proceso

// process.exitCode(1)

//controlar evemtos del proseo

process.on('exit', ()=>{
    //limpiar los recursos
});


console.log(process.cwd());

console.log(process.platform);


//variables de entorno
console.log(process.env.NODE_ENV);


