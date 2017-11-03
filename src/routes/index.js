const express = require('express')
const router = express.Router()
const ctrl = require('../controller')

router.get('/', ctrl.getAllMovies)

module.exports = router