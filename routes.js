const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('WOMBLES!')
})

router.get('/view', (req, res) => {
  db.view()
    .then(results => {
      res.render('./partials/view', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

module.exports = router
