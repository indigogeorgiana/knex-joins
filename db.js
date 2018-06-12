const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  listWombles,
  viewWombles,
  assignRubbish
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

function assignRubbish () {
  return db('wombles')
    .join('rubbish', 'rubbish.id', 'wombles.rubbish_id')
    .select('wombles.name as womblesName', 'rubbish.name as rubbishName')
}

function addWomble (newName, newDescription) {
  return db('wombles', 'characteristics')
    .insert(name, description)
    
}
