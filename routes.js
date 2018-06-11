const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getWombles()
    .then(wombles => {
      res.render('home', {wombles})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

module.exports = router
