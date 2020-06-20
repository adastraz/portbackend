
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 32).unique().notNullable()
            tbl.string('password', 64).notNullable()
            tbl.string('description', 128)
            tbl.string('name', 64).notNullable()
            tbl.string('company', 128)
        })

        .createTable('stories', tbl => {
            tbl.string('def_image').notNullable()
            tbl.string('2def_img').notNullable()
            tbl.string('3def_img').notNullable()
            tbl.string('story_desc').notNullable()
            
        })
};

exports.down = function(knex) {

};
