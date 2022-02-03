// importaciones
const express = require('express')
const router = express.Router()

// Ruteo
router.get('/', (req, res) => {
    res.send("hola")
})
//Exportaciones
module.exports = router