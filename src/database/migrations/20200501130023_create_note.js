
exports.up = knex => knex.schema.createTable('tb_note', table => {
    table.increments('cd_note');

    table.string('title', 100).notNullable();
    table.text('note').notNullable();

    table.timestamp('creationDate').defaultTo(knex.fn.now());
    table.timestamp('updateDate').defaultTo(knex.fn.now());

    table.string('id_user');
    table.foreign('id_user').references('cd_user').inTable('tb_user');
});

exports.down = knex => knex.schema.dropTable('tb_note');
