const express = require('express')

const app = express()

const port = 5000

app.listen(port, () => {
  console.log('server has been started!')
})

app.get('/hello', (req, res) => {
  res.json({ msg: 'hello from server' })
})
