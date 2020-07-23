const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('./authModel.js')

router.post('/register', validateCred, (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(error => {
            res.status(201).json(error)
        })
})

router.post('/login', validateCred, (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.user = user
                res.status(200).json({
                    message: `Welcome ${user.username}`
                })
            } else {
                res.status(401).json({ message: 'Invalid credentials'})
            }
        })
        .catch(err => {
            res.status(500).json({ err })
        })
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.json({ message: 'You must stay forever' })
            } else {
                res.status(204).end()
            }
        })
    } else {
        res.status(200).json({ message: 'Already logged out' })
    }
})

function validateCred(req, res, next){
    if (req.body.password) {
        next()
    } else {
        res.status(500).json({ message: "Enter a password"})
    }
}

module.exports = router