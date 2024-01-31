const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Home page')
    //   res.sendStatus(500)
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About Blogs')
})

module.exports = router