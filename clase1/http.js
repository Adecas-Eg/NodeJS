const http = require('node:http')
const { findAvaliblePort } = require('./free-port.js')
//haciendo un servidor par aque escuche las peticiones

const ser = http.createServer((req, res) => {
  console.log('request recived')
  res.end('Hola mundo')
})

//escuchando las peticiones
findAvaliblePort(55336).then(port => {
  ser.listen(port, () => {
    console.log(`server listening on port ???? http://localhost:${ser.address().port}`)
  })
})
