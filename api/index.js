const express = require('express')

const app = express()
const r = express.Router()

r.get('/', (req, res) => {
  res.json({a:'123'})
})

app.use(r)

module.exports = app