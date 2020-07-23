const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/authRouter')
const postsRouter = require('./posts/postsRouter')
const session = require('express-session')
const { sessionSecret } = require('../config/secrets')
const authenticate = require('./auth/auth-middleware.js')

const sessionConfig = {
    name: 'tywesthompsonblog', 
    secret: sessionSecret,
    cookie: {
        maxAge: 60000 * 30,
        secure: false, //true in production
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
}

const server = express()
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session(sessionConfig))

server.use('/api/auth', authRouter)
server.use('/api/posts', authenticate, postsRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Server is up and running' })
})

module.exports = server