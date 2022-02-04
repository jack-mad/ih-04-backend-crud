// importaciones
const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController')
// Ruteo
router.get('/', bookController.getBooks)


router.get('/create',bookController.createBooks)

//enviar datos de formulario para crear libro 
router.post('/create', bookController.createBooksForm)

//crear una pagina individual para cada libro
router.get('/:bookID', bookController.getSingleBook)

//crear pagina para editar formulario parar
router.get('/:bookID/edit', bookController.editBook)

//enviar datos editados
router.post('/:bookID/edit', bookController.editBookForm)

//borrar libro
router.post('/:bookID/delete', bookController.deleteBook)

//Exportaciones
module.exports = router