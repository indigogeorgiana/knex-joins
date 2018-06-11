const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  getWombles,
  getWombleInfo
}

function getWombles () {
  return db('wombles')
    .select('wombles.name')
}

function getWombleInfo (id) {
  return db('wombles')
    .join('characteristics', 'characteristics.id', 'wombles.characteristic_id')
    .select('wombles.name', 'characteristics.description')
    .where('wombles.id', id)
}
