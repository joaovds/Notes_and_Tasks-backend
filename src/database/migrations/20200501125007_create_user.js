
exports.up = knex => knex.schema.createTable('tb_user', table => {

    table.string('cd_user').primary();

    table.string('name', 45).notNullable();
    table.string('email', 45).notNullable().unique();
    table.string('password').notNullable();

    table.timestamp('created_user').defaultTo(knex.fn.now());
    table.timestamp('updated_user').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('tb_user');
