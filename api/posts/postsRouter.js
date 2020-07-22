const router = require('express').Router()
const Posts = require('./postsModel.js')

router.get('/', (req, res) => {
    Posts.find()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            res.send(err)
        })
})

router.post('/new', validatePost, (req, res) => {
    Posts.addPost(req.body)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new post' })
        })
})

router.put('/:id', idPost, (req, res) => {
    const { id } = req.params

    res.json({ message: 'unavailable' })
})

router.delete('/:id', idPost, (req, res) => {
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