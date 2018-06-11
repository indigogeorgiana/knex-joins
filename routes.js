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

module.exports = router
