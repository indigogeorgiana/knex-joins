const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  getWombles,
  getWomblesAll,
  assignments,
  add

}

function getWombles () {
  return db('wombles')
    .join('characteristics', 'wombles.characteristic_id', 'characteristics.id')
    .select('wombles.id', 'name', 'description', 'rubbish_id')
}

function getWomblesAll () {
  return db('wombles')
    .select('*')
}

function assignments () {
  return db('wombles')
    .join('rubbish', 'rubbish.id', 'wombles.rubbish_id')
    .select('rubbish.name', 'wombles.name')
}

function add (name, characteristics, rubbishDuty) {
  return db('wombles')
    .insert({
      'name': name,
      'characteristic_id': characteristics,
      'rubbish_id': rubbishDuty
    })
}
