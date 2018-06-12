const express = require('express')

const db = require('./db')

const router = express.Router()


router.get('/', (req, res) => {
  res.send('WOMBLES!')
})

router.get('/list', (req, res) => {
  db.listWombles()
    .then(results => {
      res.render('list', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/view', (req, res) => {
  db.viewWombles()
    .then(results => {
      res.render('view', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/assignments', (req, res) => {
  db.assignRubbish()
    .then(results => {
      res.render('assignments', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/add', (req, res) => {
  db.getCharacteristics()
    .then(characteristics => {
      res.render('add', {characteristics})
    })
})

router.post('/add', (req, res) => {
  const newName = req.body.name
  const newCharacteristic = req.body.characteristic
  db.addWomble(newName, newCharacteristic)
    .then(results => {
      res.redirect('/list')
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

module.exports = router
