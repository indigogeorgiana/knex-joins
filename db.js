const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function view () {
  return db('wombles')
    .join('characteristics', 'characteristics.id', 'wombles.characteristic_id')
    .select('wombles.name', 'characteristics.description')
}

function assignments () {
  return db('wombles as w')
    .join('rubbish as r', 'w.rubbish_id', 'r.id')
    .select('w.name', 'r.name as chore')
}

module.exports = {
  view,
  assignments
}