
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 255).notNullable().unique()
            tbl.string('password').notNullable()
        })

        .createTable('posts', tbl => {
            tbl.increments()
            tbl.string('title').notNullable()
            tbl.string('post').notNullable()
        })
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('posts')
        .dropTableIfExists('users')
}
