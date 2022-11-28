/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('friends',(table)=>{
        table.increments('id');
        table.integer('subscribe',).references('users.id');
        table.integer('subscribe_to').references('users.id');
      });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('friends');
}
