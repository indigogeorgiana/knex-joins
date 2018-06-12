
const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)
module.exports = {
  getWombles,
  getWomble
}

function getWombles () {
  return db('wombles')
    .select('name', 'id')
}

function getWomble (id) {
  return db('wombles')
    .join('characteristics', 'wombles.characteristic_id', 'characteristics.id')
    .select('wombles.name', 'characteristics.description')
    .where('wombles.id', id)
}
