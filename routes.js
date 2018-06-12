const express = require('express')

const router = express.Router()

const db = require('./db')

//  router.get('/', (req, res) => {
// res.send('WOMBLES!')
// })

router.get('/', (req, res) => {
  db.getWombles()
    .then(results => {
      res.render('wombles', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/all', (req, res) => {
  db.getWomblesAll()
    .then(results => {
      res.render('wombles', {results})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})
router.get('/form', (req, res) => {
  res.render('form')
})

router.post('/add', (req, res) => {
  const name = req.body.wombleName
  const characteristic = Number(req.body.characteristic)
  const rubbishDuty = req.body.rubbishDuty
  console.log(name)
  console.log(characteristic)
  db.add(name, characteristic, rubbishDuty)
    .then(res.redirect('/')
    //   .catch(err => {
    //     res.send(err.message).status(500)
    //   })
    )
})
module.exports = router
