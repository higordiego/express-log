const express = require('express');

const bodyParser = require('body-parser')
const http = require('http')
var app = module.exports = express();

const Help = require('./helper')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(Help.log())

app.post('/', (req, res) =>  res.status(200).json(req.body))

const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port)