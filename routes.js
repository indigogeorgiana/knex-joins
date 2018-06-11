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

router.get('/view/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getWombleInfo(id)
    .then(womble => {
      const wombleData = {
        name: womble[0].name,
        womble: womble
      }
      console.log(wombleData)
      res.render('view', wombleData)
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

module.exports = router
