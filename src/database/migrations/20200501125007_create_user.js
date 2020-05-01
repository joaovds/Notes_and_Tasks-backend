
exports.up = function(knex) {
    return knex.schema.createTable('tb_user', function(table) {
        table.string('cd_user').primary();
        table.string('name', 45).notNullable();
        table.string('email', 45).notNullable().unique();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_user');
};
