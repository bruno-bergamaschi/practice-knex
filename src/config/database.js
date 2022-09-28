const config = require('../../knexfile.js')
console.log('config', config)
const knex = require('knex')(config);

module.exports = knex;