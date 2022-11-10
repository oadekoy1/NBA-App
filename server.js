const express = require('express')
const morgan = require('morgan')
// const favicon = require('serve-favicon')
const path = require('path')
require('dotenv').config()
require('./config/db')
const cors = require('cors')
const router = require('./routes/api/users')

const app = express()
const PORT = process.env.PORT || 3001;

// middleware
app.use(morgan('dev'))
app.use(express.json())
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors({
    origin: "*",
}))

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// API Routes
app.use('/api/users', require('./routes/api/users'))

router.get('/', (req, res, next) => {
    axios.get(`http://data.nba.net/prod/v1/current/standings_conference.json`)
    then(response => {
        res.send(response.data.result)
    }).catch(error => {
        res.send(error.message)
    })
})

// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})