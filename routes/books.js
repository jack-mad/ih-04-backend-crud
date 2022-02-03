// importaciones
const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController')
// Ruteo
router.get('/', bookController.getBooks)


router.get('/create',bookController.createBooks)

//Exportaciones
module.exports = router