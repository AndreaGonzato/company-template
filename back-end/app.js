const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')


app.use(cors())

app.get('/api/test-json', (req, res) => {
  res.send({"text": "this is a JSON from the back-end"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
