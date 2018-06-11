
const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

function getWombles () {
  return db('wombles')
    .select('name')
}

module.exports = {
  getWombles
}
