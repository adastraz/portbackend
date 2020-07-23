const db = require('../../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    update,
    addPost,
    findById,
    remove
}

function find() {
    return db('posts')
}

function findBy(filter) {
    return db('posts')
        .where(filter)
}

function update (id, changes){
    return db('posts')
        .where({ id })
        .update(changes)
}

function findById(id) {
    return db('posts')
        .where({ id })
        .first()
}

function addPost(post){
    return db('posts')
        .insert(post, 'id')
}

function remove(id){
    return db('posts')
        .where({ id })
        .del()
}