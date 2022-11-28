// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
    client: 'postgresql',
    connection: {
        database: 'userdb',
        user: 'postgres',
        password: 'postgres'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_user_migrations'
    }
};
