const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/wombles')
})

router.get('/wombles', (req, res) => {
  db.getWombles()
    .then(results => {
      res.render('./layouts/main', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/view/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getWomble(id)
    .then(results => {
      const indivResult = {
        name: results[0].name,
        description: results[0].description
      }
      res.render('./layouts/indiv', indivResult)
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/assignments', (req, res) => {
  db.getWombles()
    .then(results => {
      res.render('./layouts/assignments', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

module.exports = router
