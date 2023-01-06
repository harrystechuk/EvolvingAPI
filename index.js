// Use .env for config

require('dotenv').config()

const { application } = require('express');
// Constants

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const currentVersion = process.env.CURRENTVERSION || "v1"

// App BodyParser

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// App Routes

const v1 = require(__dirname + '/routes/v1')
app.use('/v1', v1)

// App Main Route

app.get('/', (req, res) => {
    res.redirect('/' + currentVersion)
})

// App Listen

app.listen(port, (err) => {
    if (err) {
        throw err;
        return
    }
    console.log(`Listening on port ${port}`)
})