const express = require('express')

const app = express()

const port = 5000

app.listen(port)

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello world from the backend!'.toUpperCase() })
})
