let router = require('express').Router()
let Activities = require('../models/activity')


router.get('/by-user/:userId', (req, res, next) => {
  Activities.find({
    userId: req.params.userId
  }).then(alist => {
    res.send(alist)
  }).catch(next)
})

router.post('/', (req, res, next) => {
  Activities.create(req.body)
    .then(goal => {
      res.send(goal)
    }).catch(next)
})
router.put('/:id', (req, res, next) => {
  Activities.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})
router.delete('/:id', (req, res, next) => {
  Activities.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'It worked'
    })).catch(next)
})


module.exports = router