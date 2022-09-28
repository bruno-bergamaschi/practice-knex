require("dotenv").config();

module.exports = {
  client: process.env.DATABASE_DIALECT,
  version: process.env.DATABASE_VERSION,
  connection: {
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
  }, 
  pool: {
      min: 2,
      max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: `${__dirname}/src/database/migrations`
  } 
}
