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
      res.render('view', wombleData)
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/assignments', (req, res) => {
  db.getWombleRubbish()
    .then(wombles => {
      res.render('assignments', {wombles})
    })

    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/form', (req, res) => {
  res.render('form')
})

router.post('/form', (req, res) => {
  const name = req.body.womblename
  const newChar = req.body.characteristic
  // addCharacteristic inserts characteristic into the characteristics table
  db.addCharacteristic(newChar)
    .then(() => {
      db.getChar(newChar)
        .then((characteristic) => {
          db.addWomble(name, characteristic.id)
            .then(() => {
              res.redirect('/')
            })
        })
        .catch(err => {
          res.send(err.message).status(500)
        })
    })
  // getCharId looks up the new characteristic's id in the characteristics table
  // .then((getCharId(newChar))
  // addWomble takes characteristic from getCharId and uses it to create a new womble
})

module.exports = router
