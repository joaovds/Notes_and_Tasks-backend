
exports.up = function(knex) {
    return knex.schema.createTable('tb_note', function(table) {
        table.increments('cd_note');

        table.string('title', 100).notNullable();
        table.text('note').notNullable();
        table.datetime('creationDate', {precision: 6}).defaultTo(knex.fn.now(6));
        table.datetime('updateDate', {precision: 6}).defaultTo(knex.fn.now(6));

        table.string('id_user');

        table.foreign('id_user').references('cd_user').inTable('tb_user');
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_note'); 
};
