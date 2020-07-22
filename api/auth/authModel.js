const db = require('../../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    update,
    addUser,
    findById,
    remove
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

function update (id, changes){
    return db('users')
        .where({ id })
        .update(changes)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

function addUser(user){
    return db('users')
        .insert(user, 'id')
}

function remove(id){
    return db('users')
        .where({ id })
        .del()
}