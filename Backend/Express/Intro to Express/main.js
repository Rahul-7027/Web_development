const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send('About')
  })
  app.get('/contact', (req, res) => {
    res.send('Contact Us')
  })
  app.get('/blog', (req, res) => {
    res.send('Blog')
  })

  app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`${req.params.slug}`)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})