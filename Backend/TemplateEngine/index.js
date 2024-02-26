const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "rahul"
    let sitebrand = "bhati"
    res.render("index", { siteName: siteName, sitebrand: sitebrand })
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "blogTitle"
    let blognews = " Thisblog is good"
    res.render("blog", { blogTitle:blogTitle,blognews:blognews })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})