const express = require('express')
const app = express()

app.get('/api/whoami', (request, response) => {
  const json = {
    ipaddress: request.ip,
    language: request.get('Accept-Language'),
    software: request.get('User-Agent'),
  }
  response.json(json)
})

module.exports = app
