const express = require('express')
const app = express()
const port = 3000


const blog = require('./routes/blog')
app.use('/blog', blog)
app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log("This is Get Request")
  res.send('Hello World1!')
}).post('/', (req, res) => {
  console.log("This is Post Request")
  res.send('Hello World1 Post Request')
}).put('/', (req, res) => {
  console.log("This is Put Request")
  res.send('Hello World1 Put request')
}).delete('/', (req, res) => {
  console.log("This is delete Request")
  res.send('Hello World1 delete request')
})


app.get('/index', (req, res) => {
  console.log("hey its index page")
  res.sendFile("./templates/index.html", { root: __dirname })
})

app.get('/data', (req, res) => {
  console.log("json data will be provide")
  res.sendFile("./templates/data.json", { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})