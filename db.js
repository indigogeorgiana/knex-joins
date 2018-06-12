const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  addWomble,
  listWombles,
  viewWombles,
  assignRubbish,
  getCharacteristics
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

function addWomble (newName, newCharacteristic) {
  return db('wombles')
    .insert({
      name: newName,
      characteristic_id: newCharacteristic
    })
}

function getCharacteristics () {
  return db('characteristics').select()
}
