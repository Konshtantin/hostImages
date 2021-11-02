const express = require('express')

const app = express()
require('dotenv').config()
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Not today')
})

app.listen(process.env.PORT || 3000)