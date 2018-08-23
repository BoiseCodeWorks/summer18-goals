let router = require('express').Router()
let Goals = require('../models/goal')


router.get('/by-user/:userId', (req, res, next) => {
  Goals.find({
    userId: req.params.userId
  }).then(glist => {
    res.send(glist)
  }).catch(next)
})

router.post('/', (req, res, next) => {
  Goals.create(req.body)
    .then(goal => {
      res.send(goal)
    }).catch(next)
})
router.put('/:id', (req, res, next) => {
  Goals.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})
router.delete('/:id', (req, res, next) => {
  Goals.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'It worked'
    })).catch(next)
})


module.exports = router