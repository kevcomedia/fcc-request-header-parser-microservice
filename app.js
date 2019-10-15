const express = require('express')
const app = express()

app.set('trust proxy', true)
app.set('view engine', 'pug')

app.use('/assets', express.static(__dirname + '/public'))

app.get('/', (request, response) => {
  const { protocol, hostname } = request
  response.render('index', { host: `${protocol}://${hostname}` })
})

app.get('/api/whoami', (request, response) => {
  const json = {
    ipaddress: request.ip,
    language: request.get('Accept-Language'),
    software: request.get('User-Agent'),
  }
  response.json(json)
})

module.exports = app
