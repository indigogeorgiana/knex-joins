const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

module.exports = {
  getWombles,
  getWombleInfo,
  getWombleRubbish,
  addCharacteristic,
  getChar,
  addWomble
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

function getWombleRubbish () {
  return db('wombles')
    .join('rubbish', 'rubbish.wombles_id', 'wombles.id')
    // ('name of table', 'common columns of both tables), ('name of both tables')
    .select('wombles.name as wombleName', 'rubbish.name as rubbishName')
}

function addCharacteristic (description) {
  // check if characteristic already exists in characteristics db
  return getChar(description)
    .then((result) => {
      if (result === undefined) {
        // if it does exist, insert the new characteristic
        return db('characteristics')
          .insert({description: description})
      } else {
        return [result.id]
      }
    })
}

function getChar (description) {
  return db('characteristics')
    .select()
    .where('characteristics.description', description)
    .first()
}

function addWomble (name, id) {
  console.log(name, id)
  return db('wombles')
    .insert({name: name, characteristic_id: id})
}
