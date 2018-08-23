let express = require('express')
let bp = require('body-parser')
let server = express();
let port = 3000

server.use(bp.json())
server.use(bp.urlencoded(({ extended: true })))



//Error Handlers
server.use('/api/*', (err, req, res, next) => {
  res.status(400).send(err)
})
server.use('*', (req, res, next) => {
  res.status(404).send('<h1>404</h1>')
})




server.listen(port, () => {
  console.log('GOOOOOOOOOOOOOOOOALS', port)
})