const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function view () {
  return db('wombles as w')
    .join('characteristics as c', 'c.id', 'w.characteristic_id')
    .select('w.name', 'c.description', 'c.id')
}

function assignments () {
  return db('wombles')
    .join('rubbish', 'wombles.rubbish_id', 'rubbish.id')
    .select('wombles.name', 'rubbish.name as chore')
}

function add (name, description) {
  return db('wombles')
    .insert({'name': name, 'characteristic_id': description})
}

module.exports = {
  view,
  assignments,
  add
}
