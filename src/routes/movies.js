const express = require('express')
const router = express.Router()
const { MoviesController: ctrl } = require('../controller')

router.get('/', ctrl.index)
router.get('/:id', ctrl.validations.exists, ctrl.show)
router.post('/', ctrl.validations.prune, ctrl.validations.complete, ctrl.create)
router.put('/:id', ctrl.validations.exists, ctrl.validations.prune, ctrl.validations.complete, ctrl.put)
router.delete('/:id', ctrl.validations.exists, ctrl.del)

module.exports = router