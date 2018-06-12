const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  listWombles,
  viewWombles
}

function listWombles () {
  return db('wombles')
    .select('wombles.name')
}

function viewWombles () {
  return db('wombles')
    .join('characteristics', 'characteristics.id', 'wombles.characteristic_id')
    .select('wombles.name', 'characteristics.description')
}
