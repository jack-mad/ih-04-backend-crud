// importaciones
const express = require('express')
const router = express.Router()

const controller =require('./../controllers/controller')
// Ruteo
router.get('/', controller.getHome)


//Exportaciones
module.exports = router