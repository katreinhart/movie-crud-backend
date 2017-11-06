const express = require('express')
const router = express.Router()
const ctrl = require('../controller')

router.get('/', ctrl.getAllMovies)
router.get('/:id', ctrl.getOneMovie)
router.post('/', ctrl.createMovie)
router.put('/:id', ctrl.updateMovie)
router.delete('/:id', ctrl.deleteMovie)

module.exports = router