const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function view () {
  return db('wombles')
    .join('characteristics', 'characteristics.id', 'wombles.characteristic_id')
    .select('wombles.name', 'characteristics.description')
}

module.exports = {
  view
}