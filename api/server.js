const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/authRouter')
const postsRouter = require('./posts/postsRouter')

const server = express()
server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api', authRouter)
server.use('api/posts', postsRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Server is up and running' })
})

module.exports = server