// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', //Your Host
      user: 'root', //Your user
      password: '', //Your password
      database: 'db_note',
      timezone: 'UTC'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  }

};
