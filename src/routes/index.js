const express = require('express')
const router = express.Router()
const ctrl = require('../controller')

router.get('/', ctrl.getAllMovies)
router.get('/:id', ctrl.getOneMovie)

module.exports = router