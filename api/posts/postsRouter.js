const router = require('express').Router()\

router.get('/', (req, res) => {
    res.json({ message: 'get posts' })
})

module.exports = router