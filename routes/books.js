// importaciones
const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController')
// Ruteo
router.get('/', bookController.getBooks)


//Exportaciones
module.exports = router