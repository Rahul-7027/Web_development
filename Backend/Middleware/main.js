const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const blog=require("./routes/blog")
// app.use(express.static("public"))

app.use("/blog",blog)
// Middleware 1
app.use((req, res, next) => {
    console.log("First");
    // fs.writeFileSync("log.txt", `${Date.now()} is method ${req.method}`);
    fs.appendFileSync("log.txt", `${Date.now()} is method ${req.method}\n`);
    console.log(req.headers)
    req.rahul = "rahul bhai"
    console.log(`${Date.now()} is method ${req.method}`);
    // res.send('Middleware first');
    next();
});
app.use((res, req, next) => {
    console.log("Second")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!')
})
app.get('/contact', (req, res) => {
    res.send(`Hello contact ${req.rahul}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})