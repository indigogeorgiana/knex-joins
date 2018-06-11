const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  getWombles
}

function getWombles () {
  return db('wombles')
    .select('wombles.name')
}
