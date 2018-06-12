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
      const indivResult = results[0]
      res.render('./layouts/indiv', {indivResult})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })

})
module.exports = router
