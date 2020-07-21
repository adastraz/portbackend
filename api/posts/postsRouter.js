const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'get posts' })
})

router.post('/new', (req, res) => {
    res.json({ message: 'unavailable' })
})

router.put('/:id', (req, res) => {
    const { id } = req.params

    res.json({ message: 'unavailable' })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    res.json({ message: 'unavailable' })
})

function validatePost(req, res, next) {
    if (req.body.title && req.body.post) {
        next()
    } else {
        res.status(400).json({ message: 'post does not have a title or content' })
    }
}

function idPost(req, res, next) {
    const { id } = req.params
}

module.exports = router