const express = require('express')
const app = express()
const port = 3000
const data = process.env.data || "World"
app.get('/', (req, res) => res.send(`Hello ${data}!`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));