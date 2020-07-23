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

    Posts.findById(id)
        .then(post => {
            if (post) {
                Posts.update(id, req.body)
                    .then(updatedPost => {
                        res.json(updatedPost)
                    })
                    .catch(err => {
                        res.json({ message: 'failed to update post'})
                    })
            } else {
                res.status(404).json({ message: 'Could not find the post with the given id'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'failed to update post'})
        })
})

router.delete('/:id', idPost, (req, res) => {
    const { id } = req.params

    Posts.remove(id)
        .then(removed => {
            res.json({ deleted: removed })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to delete post' })
        })
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

    Posts.findById(id)
        .then(post => {
            if (post && Object.entries(post).length) {
                next()
            } else {
                res.status(400).json({ message: 'Post does not exist' })
            }
        })
}

module.exports = router