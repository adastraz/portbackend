const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {jwtSecret } = require('../../config/secrets.js')

const Users = require('./authModel.js')

router.get('/register', validateCred, (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash
    
    res.json({ message: 'post to gain authentication'})
})

router.get('/login', validateCred, (req, res) => {
    let { username, password } = req.body

    res.json({ message: 'post to gain authentication'})
})

function validateCred(req, res, next){
    if (req.body.password){
        next()
    } else {
        res.status(500).json({ message: "enter a password"})
    }
}

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1hr'
    }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router