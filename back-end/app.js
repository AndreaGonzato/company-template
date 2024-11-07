const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/test', (req, res) => {
  res.send('back-end works!')
})

app.get('/api/test-json', (req, res) => {
  res.send({"field": "this is a JSON from the back-end"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
